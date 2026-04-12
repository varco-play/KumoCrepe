import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

export const runtime = 'edge'

const SYSTEM_PROMPT = `You are Kumo, a friendly and knowledgeable assistant for Kumo Crepe — a French-inspired crepe and specialty beverage cafe in San Marcos, Texas.

ABOUT THE CAFE:
- Name: Kumo Crepe
- Tagline: "Crepe with a soul"
- Location: 312 University Drive, San Marcos, TX 78666
- Phone: (512) 855-3255
- Hours: Tuesday–Saturday, 11:00 AM to 9:00 PM
- Closed: Sunday and Monday
- Online ordering: https://order.toasttab.com/online/kumo-312-university-drive

MENU:
Sweet Crepes:
  - Strawberry Dream ($10.50) — Fresh strawberries, whipped cream, Nutella drizzle
  - Paris Morning ($9.75) — Lemon curd, powdered sugar, fresh blueberries
  - Bananas Foster ($11.25) — Caramelized bananas, brown sugar butter sauce, cinnamon, vanilla cream

Specialty Drinks:
  - Kumo Cloud Latte ($6.50) — Espresso, oat milk, vanilla, signature cloud foam [Signature]
  - Lavender Earl Grey ($5.75) — Earl Grey tea, lavender syrup, steamed oat milk
  - Caramel Cascade ($7.00) — Cold brew, house caramel, salted caramel dust [New]

YOUR PERSONALITY:
- Warm, welcoming, and enthusiastic — like a friendly barista
- Keep answers short: 2-3 sentences maximum unless listing a full menu
- Gently encourage ordering online or visiting the cafe
- If asked something you don't know (daily specials, wait times, etc.) say: "I'd recommend calling us at (512) 855-3255 for the most up-to-date info!"
- Never make up information you are not sure about
- Use "we" and "our" when talking about Kumo
- You may use a light, warm emoji occasionally (☁️ 🥞 ✨) but keep it subtle
- Respond only in English`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'AI assistant is not configured. Please contact the site administrator.' },
        { status: 503 },
      )
    }

    const groq = new Groq({ apiKey })

    // Limit to last 10 messages to control token usage on free tier
    const recentMessages = messages.slice(-10)

    const completion = await groq.chat.completions.create({
      model:       'llama-3.3-70b-versatile',
      max_tokens:  350,
      temperature: 0.7,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
    })

    const content =
      completion.choices[0]?.message?.content ??
      'I\'m having a little trouble right now — please try again or call us at (512) 855-3255! ☁️'

    return NextResponse.json({ content })
  } catch (err) {
    console.error('[/api/chat] Groq error:', err)
    return NextResponse.json(
      { error: 'Something went wrong with the AI assistant. Please try again.' },
      { status: 500 },
    )
  }
}
