# HubSpot Custom Properties Setup Guide

## Overview
This guide will help you create custom properties in HubSpot to store AIVI-specific data from chat sessions and form submissions.

---

## Required Custom Properties

Create these 8 custom properties for Contact objects in HubSpot:

### 1. AIVI Session ID
- **Property Name**: `aivi_session_id`
- **Label**: "AIVI Session ID"
- **Field Type**: Single-line text
- **Group**: Contact Information
- **Description**: "Unique session identifier from AIVI chat/form"

### 2. AIVI Challenge
- **Property Name**: `aivi_challenge`
- **Label**: "AIVI Challenge"
- **Field Type**: Single-line text (or Dropdown if you want predefined options)
- **Group**: Marketing Information
- **Description**: "Customer's primary business challenge identified by AIVI"

### 3. AIVI Channels
- **Property Name**: `aivi_channels`
- **Label**: "AIVI Preferred Channels"
- **Field Type**: Single-line text
- **Group**: Marketing Information
- **Description**: "Customer's preferred communication channels (comma-separated)"

### 4. AIVI Message Volume
- **Property Name**: `aivi_volume`
- **Label**: "AIVI Message Volume"
- **Field Type**: Single-line text (or Dropdown)
- **Group**: Company Information
- **Description**: "Monthly customer interaction volume"

### 5. AIVI Business Goal
- **Property Name**: `aivi_goal`
- **Label**: "AIVI Business Goal"
- **Field Type**: Single-line text (or Dropdown)
- **Group**: Marketing Information
- **Description**: "Primary goal with AI automation"

### 6. AIVI Current CRM
- **Property Name**: `aivi_current_crm`
- **Label**: "AIVI Current CRM"
- **Field Type**: Single-line text
- **Group**: Company Information
- **Description**: "Current CRM system used by the contact"

### 7. AIVI Conversation Transcript
- **Property Name**: `aivi_conversation_transcript`
- **Label**: "AIVI Conversation Transcript"
- **Field Type**: Multi-line text
- **Group**: Marketing Information
- **Description**: "Full chat conversation transcript from AIVI"

### 8. AIVI Additional Notes
- **Property Name**: `aivi_additional_notes`
- **Label**: "AIVI Additional Notes"
- **Field Type**: Multi-line text
- **Group**: Marketing Information
- **Description**: "Additional notes provided by the contact"

---

## How to Create Custom Properties in HubSpot

### Step-by-Step Instructions:

1. **Navigate to Settings**
   - Click the **Settings** (gear icon) in the top right corner

2. **Go to Properties**
   - In the left sidebar, under "Data Management", click **Properties**

3. **Select Contact Properties**
   - Click the **"Contact properties"** tab at the top

4. **Create New Property**
   - Click **"Create property"** button (top right)

5. **Fill in Property Details**
   - **Object type**: Contact
   - **Group**: Choose appropriate group (Marketing Information, Company Information, or Contact Information)
   - **Label**: Copy from the list above
   - **Description**: Copy from the list above
   - **Field type**: As specified above
   - **Property name**: This will auto-populate from the label, but **manually change it** to match the exact name above (e.g., `aivi_session_id`)

6. **Save Property**
   - Click **"Create"** button

7. **Repeat for All 8 Properties**
   - Follow steps 4-6 for each property in the list

---

## Alternative: Use Standard HubSpot Fields

If you don't want to create custom properties, the integration will still work but data will be mapped to standard fields:

- **Email** → `email` (standard)
- **First Name** → `firstname` (standard)
- **Last Name** → `lastname` (standard)
- **Phone** → `phone` (standard)
- **Company** → `company` (standard)
- **Industry** → `industry` (standard)
- **Challenge** → Will be stored in standard `notes` field
- **Other AIVI data** → Will not be captured

Custom properties provide **much better data organization** and reporting capabilities.

---

## Verification

After creating the properties:

1. **Check Property Names**
   - Go to Settings → Properties → Contact properties
   - Search for "aivi"
   - Verify all 8 properties appear with correct internal names (e.g., `aivi_session_id`)

2. **Test the Integration**
   - Fill out the AIVI demo form on your staging site
   - Check if the contact is created/updated in HubSpot
   - Verify all custom fields are populated

3. **Check Console Logs**
   - Open browser DevTools → Console
   - Look for HubSpot sync messages:
     - ✅ = Success
     - ❌ = Error (usually means properties don't exist)

---

## Troubleshooting

### Error: "Property does not exist"
- Double-check the property internal name matches exactly (case-sensitive)
- Verify you created properties for **Contact** objects (not Company or Deal)
- Refresh your browser and try again

### Error: "Invalid authorization"
- Verify your HubSpot API key is correct in `.env.local`
- Check that the API key has correct scopes (`crm.objects.contacts.read` and `crm.objects.contacts.write`)
- Make sure you added the key to Vercel environment variables for production

### Contact Created But Custom Fields Empty
- The properties exist but data isn't being sent
- Check browser console for errors
- Verify property names in `lib/hubspotService.ts` match your HubSpot properties exactly

---

## Need Help?

If you encounter issues:
1. Check the browser console for detailed error messages
2. Verify API key permissions in HubSpot
3. Test with the test endpoint: `GET /api/hubspot/sync` (shows if API key is configured)
4. Check HubSpot Activity Log on contact records to see what data was received

---

## Summary

**Required Actions:**
1. ✅ Create 8 custom properties in HubSpot (use exact names above)
2. ✅ Verify property names match exactly (case-sensitive)
3. ✅ Test with a dummy submission
4. ✅ Check contact is created/updated with all fields populated

**Time Required:** ~10-15 minutes to create all properties

**Benefits:**
- Full conversation history stored with each contact
- Detailed lead qualification data
- Better reporting and segmentation
- Easier follow-up with context
