# Product Design (UI/UX)

## Extension Popup

### States
1.  **Safe State**
    - **Color**: Green (#10B981)
    - **Icon**: Shield Check
    - **Text**: "This site is safe."
    - **Action**: "Scan again" (secondary)

2.  **Suspicious State**
    - **Color**: Yellow (#F59E0B)
    - **Icon**: Alert Triangle
    - **Text**: "Suspicious activity detected."
    - **Details**: "This site uses an IP address instead of a domain name."
    - **Action**: "Report Safe", "Leave Site"

3.  **Phishing/Malicious State**
    - **Color**: Red (#EF4444)
    - **Icon**: Skull / Ban
    - **Text**: "PHISHING DETECTED!"
    - **Details**: "This site appears to be impersonating 'google.com'."
    - **Action**: BLOCK NAVIGATION (Overlay), "Go Back"

## User Flows

### On Page Load
1.  Extension icon changes color (Green/Yellow/Red).
2.  If **Red**: Full-page warning overlay injects into the tab.

### User Report
1.  User clicks extension icon.
2.  Clicks "Report".
3.  Selects "Thinking this is safe" or "This is phishing".
4.  Submits -> API call.