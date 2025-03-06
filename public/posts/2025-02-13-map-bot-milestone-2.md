---
# "Milestone 2: Expanding Country Recognition"
date: "2025-02-13"
---

## Enhancements Implemented

### ✅ Fuzzy Matching for Countries  
- We integrated **fuzzywuzzy** to match **misspelled country names** with the correct ones.

Example:
GDP of Untied States (typo) ✅ NY.GDP.PCAP.CD of United States in 2022: 76094.38

```pgsql

### ✅ Abbreviations Handling  
- A new **`abbreviations.json`** file was created to store common **country abbreviations** (e.g., `"USA"` → `"United States"`).

### ✅ External Country List (`countries.json`)  
- Instead of hardcoding **country names** inside the chatbot, we moved all **193 countries** into an **external JSON file** for easier updates.

## Challenges Faced

⚠️ Performance slowed down due to **fuzzy matching** on long country lists.  
⚠️ Some country **abbreviations conflicted** with words in normal queries (e.g., `"IN"` for India vs. `"in"`).  
⚠️ The bot still struggled with some **non-standard country names** (e.g., *"Democratic Republic of Congo"* vs. *"Congo DRC"*).
```
