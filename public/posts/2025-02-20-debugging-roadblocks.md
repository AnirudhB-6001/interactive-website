---
title: "Phase 4: Debugging, Errors & Learning"
date: "2025-02-20"
---

## Deployment Struggles with Railway
I attempted to deploy the game on **Railway.app**—and hit **several issues**:
🚨 **Challenges Faced:**
1. Procfile encoding issues caused deployment failures.
2. Build directory was not recognized properly.
3. Environment variables were **not set correctly**.
4. **Git tracking issues** led to errors while pushing updates.

### Database Confusion:
- I tried using **SQLite** for user accounts.
- Forgot to **run migrations** → Login system failed.
- Spent **too much time on authentication** instead of building challenges.

💡 **Lesson Learned:** **Focus on game mechanics first. Deployment can wait.**