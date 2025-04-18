# Git Best Practices Quick Reference

## Core Rules
1. Never work directly on main/master branch
2. Always create a new branch for new features
3. Push your work regularly (like a backup)
4. Write clear commit messages
5. Check which branch you're on before working

## Common Commands

### Check Status & Location
```bash
# Check which branch you're on and if you have changes
git status

# Check which branch you're on
git branch
```

### Creating & Switching Branches
```bash
# Create and switch to new branch
git checkout -b new-branch-name

# Switch to existing branch
git checkout branch-name

# Switch back to main branch
git checkout master
```

### Saving Your Work
```bash
# Add specific files
git add filename.html

# Add all changed files
git add .

# Commit your changes
git commit -m "Clear message about what you did"

# Push your branch to GitHub
git push origin branch-name
```

### Merging Changes
```bash
# Get latest changes from GitHub
git pull origin master

# Switch to main branch
git checkout master

# Merge your branch into main
git merge your-branch-name

# Push main to GitHub
git push origin master
```

## Workflow Example
```bash
# Start new feature
git checkout -b add-contact-form

# Make your changes...

# Save your work
git add .
git commit -m "Add contact form with validation"
git push origin add-contact-form

# Merge to main
git checkout master
git merge add-contact-form
git push origin master
```

## Common Scenarios

### Starting Work
1. Check you're on main: `git status`
2. Get latest changes: `git pull origin master`
3. Create new branch: `git checkout -b new-feature`
4. Start working

### Finishing Work
1. Add changes: `git add .`
2. Commit changes: `git commit -m "Message"`
3. Push branch: `git push origin branch-name`
4. Switch to main: `git checkout master`
5. Merge changes: `git merge branch-name`
6. Push to GitHub: `git push origin master`

### If You Make a Mistake
1. Check status: `git status`
2. Discard changes: `git checkout -- filename`
3. Or get help from your team!

## Best Practice Tips
1. **Branch Names:**
   - Use clear, descriptive names
   - Example: `add-contact-form`, `fix-header-bug`

2. **Commit Messages:**
   - Be clear and specific
   - Example: "Add contact form with email validation"

3. **Regular Pushing:**
   - Push at least daily
   - Push before ending work
   - Think of it as a backup

4. **Before Starting Work:**
   - Check which branch you're on
   - Create new branch if needed
   - Pull latest changes

## Remember
- Main branch = Clean, working version
- New features = New branches
- Regular commits = Safe work
- Regular pushes = Backed up work 