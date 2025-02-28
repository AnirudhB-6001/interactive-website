---
title: "Phase 5: Our Game Actually Works!"
date: "2025-02-22"
---

## Testing the Game Mechanics
After fixing multiple issues, the game **finally worked**!

✅ **Fetching Challenges**
```bash
$ curl -X GET http://127.0.0.1:5000/api/challenge
{
  "prompt": "Decode this secret message: U2VjdXJpdHlJc0Z1bg==",
  "title": "Decode the Message"
}

✅ Submitting a Wrong Answer

$ curl -X POST http://127.0.0.1:5000/api/submit -H "Content-Type: application/json" -d '{"answer": "WrongAnswer"}'
{
  "error": "Incorrect answer, try again"
}

✅ Submitting the Correct Answer

$ curl -X POST http://127.0.0.1:5000/api/submit -H "Content-Type: application/json" -d '{"answer": "SecurityIsFun"}'
{
  "flag": "CTF{well_done_you_cracked_it}"
}

Seeing this response was the best feeling ever! 🚀


---

#### **📄 `public/posts/2025-02-24-whats-next.md`**
```md
---
title: "Phase 6: What's Next?"
date: "2025-02-24"
---

## Future Plans for the Game
With the basic CTF game functional, my **next goals** are:
✅ **New challenge types** (XOR Cipher, SQL Injection, etc.)  
✅ **Making the game more dynamic** by introducing a challenge database  
✅ **Expanding the learning journey** with cybersecurity concepts  

### Lessons Learned:
- **Deployment is tricky**—get the project working locally first.
- **CTF challenges require creative problem-solving.**
- **Documentation is crucial**—hence this blog!

🚀 Looking forward to the next phase of this journey!
