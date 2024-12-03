import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import * as emailjs from '@emailjs/browser';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailParams {
  name: string;
  email: string;
  company?: string;
  message: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, company, message } = await req.json() as EmailParams;

    const templateParams = {
      user_name: name,
      user_email: email,
      user_company: company || '',
      message: message,
    };

    await emailjs.send(
      Deno.env.get('EMAILJS_SERVICE_ID') || '',
      Deno.env.get('EMAILJS_TEMPLATE_ID') || '',
      templateParams,
      Deno.env.get('EMAILJS_PUBLIC_KEY') || ''
    );

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})