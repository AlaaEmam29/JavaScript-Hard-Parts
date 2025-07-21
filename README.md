# JavaScript Hard Parts - Deep Learning Resources

A comprehensive collection of JavaScript learning resources with dynamic resource counting.

## 🚀 Quick Start

### Prerequisites

- Python 3.x
- pip3

### Installation & Running

1. **Create and activate virtual environment:**

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install dependencies:**

```bash
pip install -r requirements.txt
```

3. **Run development server:**

```bash
mkdocs serve
```

## 🔄 Dynamic Resource Counting

This project includes automatic resource counting that keeps documentation synchronized with actual content.

### Available Scripts

```bash
npm run dev

npm run build
```

### How It Works

The `index.py` script:

1. **Scans all resource files** (`docs/*/resources.md`)
2. **Counts resources** by finding `#### X.` headers
3. **Updates individual files** with correct resource counts
4. **Updates main index** with section totals and grand total

### Adding New Resources

When you add a new resource to any section:

1. Add the resource with the next sequential number (e.g., `#### 14. New Resource`)
2. Run `npm run dev` or `python3 index.py`
3. All counts will be automatically updated across the documentation

### File Structure

```
docs/
├── index.md                           # Main page with section summaries
├── javascript-principles/
│   └── resources.md                   # 8 resources
├── functions-callbacks/
│   └── resources.md                   # 10 resources
├── closure/
│   └── resources.md                   # 12 resources
├── asynchronous-javascript/
│   └── resources.md                   # 13 resources
├── promises/
│   └── resources.md                   # 13 resources
├── classes-prototypes/
│   └── resources.md                   # 13 resources
└── advanced-concepts/
    └── resources.md                   # 12 resources
```

## 📊 Current Statistics

- **Total Resources**: 81 carefully curated articles and videos
- **Sections**: 7 major JavaScript concepts
- **Auto-updated**: Resource counts sync automatically

## 🛠️ Development Workflow

1. **Add new resources** to appropriate section files
2. **Run update script** to sync counts
3. **Test locally** with `mkdocs serve`
4. **Build for production** with updated counts

## 🤝 Contributing

1. Fork the repository
2. Add your resource following the existing format
3. Run `python3 index.py` to update counts
4. Submit a pull request

## 📝 Resource Format

When adding resources, follow this format:

```markdown
#### X. Resource Title

**Author:** Author Name  
**Type:** Resource Type  
**URL:** [https://example.com](https://example.com)

**Focus:** What this resource covers

**Why Essential:** Why this resource is valuable

---
```

The script will automatically detect and count these resources.

## 🔧 Troubleshooting

### Resource count not updating?

- Ensure resources follow the `#### X.` format
- Check that the file is in a `*/resources.md` path
- Run the update script manually to see any error messages

### Script errors?

- Ensure you're in the project root directory
- Check that all resource files exist and are readable
- Verify Python 3 is installed and accessible

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
