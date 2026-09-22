# GitHub Setup Instructions

Your Math Kangaroo Practice System repository is ready! Follow these steps to push it to GitHub.

## Prerequisites
- GitHub account (create one at https://github.com if needed)
- Git installed locally
- The repository initialized locally (already done ✓)

## Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `math-kangaroo-practice`
   - **Description**: "Interactive Math Kangaroo Grade 5 practice system with 50-question PDF sets and topic taxonomy"
   - **Visibility**: Public (for community contributions) or Private (for personal use)
   - **Initialize repository**: Leave unchecked (we already have commits)
   - Click **Create repository**

## Step 2: Connect Local Repository to GitHub

Copy the commands GitHub shows you and run them in your terminal.

**For HTTPS (easiest for most users):**
```bash
cd /path/to/math-kangaroo-practice
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/math-kangaroo-practice.git
git push -u origin main
```

**For SSH (if you have SSH keys configured):**
```bash
cd /path/to/math-kangaroo-practice
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/math-kangaroo-practice.git
git push -u origin main
```

⚠️ **Replace `YOUR-USERNAME` with your actual GitHub username**

## Step 3: Verify the Push

After running the commands:
1. Visit `https://github.com/YOUR-USERNAME/math-kangaroo-practice`
2. Verify all files are present
3. Check that the commit message appears in the history

## Step 4: Configure Repository Settings (Optional but Recommended)

### Enable Issues & Discussions
1. Go to Settings → Features
2. Check "Issues"
3. Check "Discussions" (for community Q&A)

### Add Topics
1. Go to the main repository page
2. Click the ⚙️ gear icon in the About section
3. Add topics: `math`, `kangaroo`, `education`, `practice`, `python`, `html`

### Set Up GitHub Pages (Optional)
To host the HTML interface directly from GitHub:
1. Go to Settings → Pages
2. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main / (root)
3. Click Save
4. Your site will be available at: `https://YOUR-USERNAME.github.io/math-kangaroo-practice/`

## Step 5: Update README with Links

After GitHub Pages is set up, update your README.md with the live link:

```markdown
## Quick Start

### View the Interactive Interface (Live)
👉 [Open the Practice System](https://YOUR-USERNAME.github.io/math-kangaroo-practice/grade5_kangaroo_practice.html)

### Or Run Locally
Open `grade5_kangaroo_practice.html` in your browser.
```

## Troubleshooting

### Authentication Issues
If you get authentication errors:

**For HTTPS:**
- Use GitHub Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens
- Select scopes: `repo`, `workflow`
- Use token as password when prompted

**For SSH:**
- Generate SSH keys: `ssh-keygen -t ed25519 -C "your-email@example.com"`
- Add public key to GitHub: https://github.com/settings/keys
- Test connection: `ssh -T git@github.com`

### Branch Already Exists
If you get "fatal: A branch named 'main' already exists":
```bash
git branch -M main
```

### Remote Already Exists
If you get "fatal: remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/math-kangaroo-practice.git
```

## Next Steps

After pushing to GitHub:

### 1. Share Your Repository
- Add to GitHub profile README
- Share on social media
- Include in portfolio
- Notify Math Kangaroo communities

### 2. Enable Collaboration
- Invite collaborators (Settings → Collaborators)
- Set up branch protection rules
- Create discussion templates

### 3. Set Up Automation (Optional)
Create `.github/workflows/ci.yml` for automated testing:
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: '3.9'
      - run: pip install reportlab
      - run: python3 generate_all_pdfs.py
```

### 4. Create Release
1. Go to Releases section
2. Click "Create a new release"
3. Tag version: `v1.0.0`
4. Title: "Math Kangaroo Practice v1.0.0"
5. Description: List features and improvements

## Key Files in Your Repository

| File | Purpose |
|------|---------|
| `grade5_kangaroo_practice.html` | Main interactive interface |
| `generate_all_pdfs.py` | Script to generate new PDF sets |
| `Math_Kangaroo_Topic_Taxonomy.md` | Complete topic breakdown |
| `all_pdfs_base64.json` | Embedded PDF data |
| `README.md` | Project documentation |
| `CONTRIBUTING.md` | Guidelines for contributors |
| `LICENSE` | MIT License |
| `docs/` | Additional documentation |
| `pdfs/` | Generated PDF files |

## Repository Statistics

**Current Status:**
- ✅ **Files**: 12
- ✅ **Commit**: 1 (Initial commit)
- ✅ **Branch**: main
- ✅ **License**: MIT
- ✅ **Ready**: Yes

**Practice Sets Included:**
- 1.1 Basic Arithmetic
- 1.2 Number Properties  
- 1.4 Fractions & Decimals
- 2.1 Basic Geometry
- 4.1 Logic Puzzles
- 6.1 Word Problems

**Questions**: 300 total (50 per set)
**Answer Keys**: 6 complete
**Documentation**: README, Topic Taxonomy, Contributing Guide

## Getting Help

- 📖 GitHub Documentation: https://docs.github.com
- 💬 GitHub Support: https://support.github.com
- 🚀 Git Guides: https://github.com/git-tips/tips

## Quick Commands Reference

```bash
# Check repository status
git status

# View commit history
git log --oneline

# Make changes
git add .
git commit -m "Your message"

# Push changes
git push

# Pull latest changes
git pull

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout branch-name

# Delete branch
git branch -d branch-name
```

## Repository URL Templates

After creating your repository, you'll have:

```
HTTPS: https://github.com/YOUR-USERNAME/math-kangaroo-practice
SSH:   git@github.com:YOUR-USERNAME/math-kangaroo-practice.git
Web:   https://github.com/YOUR-USERNAME/math-kangaroo-practice
Pages: https://YOUR-USERNAME.github.io/math-kangaroo-practice/
```

---

**Ready to push?** Run the commands from Step 2 above! 🚀

For questions, see CONTRIBUTING.md or create a GitHub Issue.

**Last Updated**: September 2026
