# 🤝 Contributing to Responsive Portfolio Website

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)

---

## 👥 Code of Conduct

### Our Commitment

We are committed to providing a welcoming and inclusive environment for all contributors. We expect:

- **Respect** - Treat all contributors with respect
- **Professionalism** - Maintain professional communication
- **Inclusivity** - Welcome diverse perspectives and backgrounds
- **Constructive Feedback** - Provide helpful and constructive criticism

### Unacceptable Behavior

The following behaviors are unacceptable:
- Harassment or discrimination
- Offensive comments or language
- Disruptive behavior
- Violation of privacy or intellectual property

---

## 🚀 Getting Started

### Prerequisites

Before you start contributing, ensure you have:

- Node.js 18 or higher
- npm or yarn package manager
- Git installed and configured
- A GitHub account
- MongoDB connection (local or Atlas)

### Initial Setup

1. **Fork the Repository**
   ```bash
   # Go to https://github.com/SUSHANTHPVS/cognevance_Responsive-Portfolio-Website
   # Click "Fork" button
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cognevance_Responsive-Portfolio-Website.git
   cd Responsive\ Portfolio\ Website
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/SUSHANTHPVS/cognevance_Responsive-Portfolio-Website.git
   git remote -v  # Verify both origin and upstream
   ```

4. **Install Dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Backend (new terminal)
   cd backend
   npm install
   ```

5. **Setup Environment Variables**
   ```bash
   # Backend
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

6. **Verify Setup**
   ```bash
   # Terminal 1: Frontend
   cd frontend
   npm run dev
   
   # Terminal 2: Backend
   cd backend
   npm run dev
   
   # Visit http://localhost:5173 to verify
   ```

---

## 💻 Development Workflow

### Creating a Feature Branch

```bash
# Ensure you're on main
git checkout main

# Pull latest changes from upstream
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name

# Examples:
git checkout -b feature/add-dark-mode
git checkout -b feature/improve-contact-form
git checkout -b fix/fix-mobile-navbar
```

### Branch Naming Convention

Use descriptive branch names following this pattern:

```
[type]/[description]

Types:
- feature/     (new features)
- fix/         (bug fixes)
- docs/        (documentation)
- refactor/    (code refactoring)
- test/        (test additions)
- perf/        (performance improvements)

Examples:
- feature/add-dark-mode
- fix/contact-form-validation
- docs/update-readme
- refactor/component-cleanup
- test/add-unit-tests
- perf/optimize-images
```

### Development Process

1. **Make Changes**
   - Keep changes focused and related
   - Make commits as you progress
   - Test changes locally

2. **Run Tests** (if applicable)
   ```bash
   # Frontend
   cd frontend
   npm run test  # If test script exists
   
   # Backend
   cd backend
   npm run test  # If test script exists
   ```

3. **Build for Production**
   ```bash
   # Frontend
   cd frontend
   npm run build
   
   # Backend testing
   cd backend
   npm start  # Test production start
   ```

4. **Test the Application**
   - Verify the application runs correctly
   - Test your specific changes
   - Test on different browsers/devices
   - Check console for errors

---

## 🎨 Coding Standards

### Frontend (React)

**Component Structure:**
```jsx
// Functional components with hooks
export default function ComponentName() {
  // 1. State hooks
  const [state, setState] = useState(initialValue)
  
  // 2. Effect hooks
  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    }
  }, [dependencies])
  
  // 3. Handlers
  const handleAction = () => {
    // Handler logic
  }
  
  // 4. Render
  return (
    <div>
      {/* JSX content */}
    </div>
  )
}
```

**Naming Conventions:**
- Components: PascalCase (e.g., `ContactForm`)
- Functions: camelCase (e.g., `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_LENGTH`)
- Boolean variables: prefix with `is` or `has` (e.g., `isLoading`, `hasError`)

**Styling:**
- Use Tailwind CSS utility classes
- Avoid inline styles when possible
- Define custom styles in `index.css` if needed
- Keep component styling consistent

**Props Handling:**
```jsx
// Good: Clear prop destructuring
export default function Card({ title, description, icon }) {
  return (
    <div className="card">
      {icon && <Icon size={24} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Avoid: Spreading unknown props
export default function Card({ ...props }) {
  // Unclear what props are expected
}
```

### Backend (Node.js/Express)

**Route Handlers:**
```javascript
// Good: Clear error handling and validation
router.post('/endpoint', async (req, res) => {
  try {
    // 1. Validate input
    const { field } = req.body
    if (!field) {
      return res.status(400).json({
        success: false,
        message: 'Field is required'
      })
    }
    
    // 2. Process request
    const result = await processData(field)
    
    // 3. Return response
    res.status(200).json({
      success: true,
      data: result
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})
```

**Error Handling:**
- Always use try-catch for async operations
- Provide meaningful error messages
- Use appropriate HTTP status codes (400, 401, 404, 500)
- Log errors for debugging

**Model Definition:**
```javascript
// Use consistent schema structure
const schema = new mongoose.Schema(
  {
    field1: {
      type: String,
      required: true,
      trim: true
    },
    field2: {
      type: String,
      default: 'default-value'
    }
  },
  {
    timestamps: true  // Auto createdAt, updatedAt
  }
)
```

### General Code Quality

**Do:**
- ✅ Write clear, self-documenting code
- ✅ Keep functions small and focused
- ✅ Add comments for complex logic
- ✅ Use meaningful variable names
- ✅ Follow DRY principle (Don't Repeat Yourself)
- ✅ Handle errors gracefully

**Don't:**
- ❌ Use `var` (use `const` and `let`)
- ❌ Write deeply nested code
- ❌ Ignore console errors/warnings
- ❌ Leave debugging code (console.log, debugger)
- ❌ Commit sensitive information
- ❌ Make unnecessary large commits

---

## 📝 Commit Guidelines

### Commit Message Format

```
[type]: Brief description (50 chars max)

Detailed explanation if needed (wrap at 72 chars)
- Point 1
- Point 2

Fixes #123 (if applicable)
```

### Commit Types

```
feat:    A new feature
fix:     A bug fix
docs:    Documentation only
style:   Changes that don't affect code meaning (formatting, etc.)
refactor: Code change that neither fixes bug nor adds feature
perf:    Code change that improves performance
test:    Adding or updating tests
chore:   Changes to build process, dependencies, etc.
```

### Good Commit Examples

```bash
# Feature
git commit -m "feat: Add dark mode toggle to navigation bar"

# Bug fix
git commit -m "fix: Resolve contact form validation error

- Fixed email regex pattern
- Added proper error message
- Tested with various email formats"

# Documentation
git commit -m "docs: Update README with setup instructions"

# Multiple related commits
git commit -m "refactor: Reorganize component file structure

- Move shared components to common folder
- Update imports in dependent files
- No functional changes"
```

### Best Practices

1. **Atomic Commits** - Each commit should represent one logical change
2. **Frequent Commits** - Commit early and often
3. **Clear Messages** - Describe what and why, not how
4. **No Debug Code** - Remove console.log before committing
5. **Test Before Committing** - Ensure code works locally

---

## 🔄 Pull Request Process

### Creating a Pull Request

1. **Push Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**
   - Go to repository main page
   - Click "Compare & pull request"
   - Follow the PR template

3. **Fill in PR Details**

**PR Title Format:**
```
[TYPE] Brief description of changes

Examples:
- [FEATURE] Add dark mode toggle
- [FIX] Resolve contact form validation
- [DOCS] Update API documentation
```

**PR Description Template:**
```markdown
## Description
Brief description of what this PR does.

## Changes Made
- Change 1
- Change 2
- Change 3

## Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested these changes:
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] All forms work correctly
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots showing the changes.

## Related Issues
Fixes #123
Related to #456

## Checklist
- [ ] My code follows the code style guidelines
- [ ] I have updated documentation
- [ ] I have tested my changes locally
- [ ] I have not added debug code (console.log, etc.)
- [ ] All commits follow the commit message guidelines
```

### Review Process

1. **Automated Checks**
   - Code quality checks
   - Build verification
   - Dependency vulnerabilities

2. **Code Review**
   - Project maintainer reviews changes
   - Feedback provided if needed
   - May request changes

3. **Final Approval**
   - PR approved and merged
   - Branch automatically deleted

### Addressing Review Comments

```bash
# Make requested changes
# Commit with clear message
git commit -m "Address review comments: [specific change]"

# Push update
git push origin feature/your-feature-name
```

### Keeping PR Updated

```bash
# Pull latest main
git fetch upstream
git rebase upstream/main

# Push updated branch
git push origin feature/your-feature-name --force
```

---

## 🐛 Reporting Issues

### Creating a Good Bug Report

**Title:** Be specific and descriptive
```
✅ Good: "Contact form not validating email with + sign"
❌ Bad: "Form doesn't work"
```

**Description:**
```markdown
## Description
Brief description of the issue.

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
Add screenshots if applicable

## Environment
- OS: Windows 11
- Browser: Chrome 120.0
- Node version: 18.17.0
```

### Issue Labels

Help us organize issues by adding labels:
- `bug` - Something isn't working
- `documentation` - Improvements to documentation
- `enhancement` - New feature request
- `good first issue` - Good for beginners
- `help wanted` - Need assistance

---

## 💡 Feature Requests

### Creating a Feature Request

**Title:** Clear and concise
```
✅ Good: "Add light/dark mode toggle in navigation"
❌ Bad: "Add more features"
```

**Description:**
```markdown
## Description
Why this feature would be useful.

## Proposed Solution
How you would implement it.

## Alternative Solutions
Other approaches considered.

## Additional Context
Screenshots, examples, or references.
```

---

## 📚 Resources

### Documentation
- [README.md](./README.md) - Project overview
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [FEATURES.md](./FEATURES.md) - Feature documentation
- [DATABASE.md](./DATABASE.md) - Database setup

### Tools & References
- [Git Documentation](https://git-scm.com/doc)
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Community
- GitHub Issues - Report bugs or request features
- Discussions - Ask questions and share ideas
- Pull Requests - Submit your contributions

---

## ✅ Contributor Checklist

Before submitting a PR, ensure:

- [ ] Branch created from latest `main`
- [ ] All changes are related to the feature/fix
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] No debug code left (console.log, etc.)
- [ ] Documentation updated if needed
- [ ] Tests written/updated (if applicable)
- [ ] Local build successful
- [ ] No new console errors/warnings
- [ ] Commit messages follow guidelines
- [ ] PR template filled out completely

---

## 🎓 Learning Resources

### If You're New to:

**Git & GitHub:**
- [GitHub Hello World](https://guides.github.com/activities/hello-world/)
- [Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)

**React:**
- [React Tutorial](https://react.dev/learn)
- [React Hooks Guide](https://react.dev/reference/react)

**Node.js/Express:**
- [Express Getting Started](https://expressjs.com/en/starter/basic-routing.html)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)

**MongoDB:**
- [MongoDB Getting Started](https://docs.mongodb.com/manual/introduction/)
- [Mongoose Documentation](https://mongoosejs.com/)

---

## 🙏 Thank You!

We appreciate your contributions to making this project better. Whether you're fixing bugs, adding features, or improving documentation, your work is valued and respected!

---

**Questions?**
- Open an issue for discussion
- Check existing issues for similar topics
- Contact the maintainer

**Happy Contributing! 🎉**
