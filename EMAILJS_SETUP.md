# 📧 EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to make it work:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (or login if you have one)
3. No credit card required for free tier

## Step 2: Create an Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add Service**
3. Choose **Gmail** (or your preferred email provider)
4. Name it: `Portfolio_Service`
5. Connect your email (you'll be guided through OAuth)
6. **Copy your Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it: `portfolio_contact_form`
4. Set the recipient email to: `adityapathania6666@gmail.com`

### Template Content:
```
Subject: New Portfolio Contact Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Reply-to: {{reply_to}}
```

5. Save the template and **copy the Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** in the dashboard
2. Scroll to **API Keys**
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxx`)

## Step 5: Add Credentials to Your Project

1. Open `.env.local` in your portfolio project
2. Fill in your credentials:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

## Step 6: Restart Your Dev Server

```bash
npm run dev
```

The contact form should now send emails! 

## Testing

1. Fill out the contact form
2. Click "Send Message"
3. Check your email (adityapathania6666@gmail.com) for the message
4. You should receive an email within seconds

## ✨ What's Included

✅ **Real email delivery** - Uses EmailJS API  
✅ **Error handling** - Shows success/error messages  
✅ **Loading state** - Spinner while sending  
✅ **Form validation** - Required fields  
✅ **Auto-clear** - Form clears after successful submit  
✅ **Environment variables** - Secure credential storage  

## 🔒 Security Notes

- Your Public Key is safe to expose (it's designed for frontend)
- Service credentials are stored in `.env.local` (never commit this file)
- Add `.env.local` to `.gitignore` (already done in most projects)

## Troubleshooting

### "Failed to send message"
- Check that all credentials in `.env.local` are correct
- Verify the email service is active in EmailJS dashboard
- Check browser console for detailed error messages

### Not receiving emails
- Check spam folder
- Verify template recipient email is correct
- Test sending directly from EmailJS dashboard

### Public Key not loading
- Make sure `.env.local` file is saved
- Restart dev server after adding env variables
- Vite needs to restart to pick up new env vars

## Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Pricing](https://www.emailjs.com/pricing/) (free tier: 200 emails/month)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-modes.html)
