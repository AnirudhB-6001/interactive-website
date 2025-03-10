# 💥 The Biggest Git Disaster (Feb 2025)

## **Accidentally Committing a Large Video File**
- GitHub rejected the push due to a 233MB video file.
- Attempted multiple Git cleanup methods (`git filter-repo`, `BFG Repo Cleaner`).
- Had to **completely reset the repository** and reinitialize `.git`.

## **Lessons Learned**
- Always check file sizes before committing.
- Keep large media files outside of the Git repository.
- Use `.gitignore` efficiently to prevent future mistakes.