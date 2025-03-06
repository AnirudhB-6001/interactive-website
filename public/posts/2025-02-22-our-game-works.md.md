---
# "Phase 5: Our Game Actually Works!"
date: "2025-02-22"
---

## Testing the Game Mechanics
After fixing multiple issues, the game **finally worked**!

**Fetching Challenges**
```bash
$ curl -X GET http://127.0.0.1:5000/api/challenge
{
  "prompt": "Decode this secret message: U2VjdXJpdHlJc0Z1bg==",
  "title": "Decode the Message"
}
```

### Submitting a Wrong Answer
```bash
$ curl -X POST http://127.0.0.1:5000/api/submit -H "Content-Type: application/json" -d '{"answer": "WrongAnswer"}'
{
  "error": "Incorrect answer, try again"
}
```
### Submitting the Correct Answer
```bash
$ curl -X POST http://127.0.0.1:5000/api/submit -H "Content-Type: application/json" -d '{"answer": "SecurityIsFun"}'
{
  "flag": "CTF{well_done_you_cracked_it}"
}
```
*Seeing this response was the best feeling ever!*