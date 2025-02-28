---
# Heading 1 "Phase 1: Setting the Foundations"
## Heading 2 Date: 2025-02-15"
---

## Choosing the Tech Stack
When I started building my CTF game, the first challenge was picking the right tech stack. Since I was already learning **Flask (Python)**, it made sense to use it for the backend.

### My Initial Decisions:
✅ **Flask** as the backend  
✅ **No database initially** – Challenges stored in the backend  
✅ **Interactive API endpoints** for solving challenges  

### First API Routes:
- `GET /api/challenge` → Fetches a challenge.
- `POST /api/submit` → Submits an answer and checks if it's correct.

After testing with `curl`, the API worked **on the first attempt**—a great start!