#!/usr/bin/env python3
"""
Dynamic Resource Counter for JavaScript Hard Parts Documentation

This script automatically counts resources in each section and updates:
1. Individual resource files (e.g., promises/resources.md)
2. Main index file (index.md)
"""

import os
import re
import glob
from pathlib import Path

def count_resources_in_file(file_path):
    """Count the number of resources in a markdown file by counting #### headers."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count #### headers that represent individual resources
        # Pattern matches: #### 1. Resource Title, #### 2. Resource Title, etc.
        resource_pattern = r'^#### \d+\.'
        matches = re.findall(resource_pattern, content, re.MULTILINE)
        return len(matches)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return 0

def update_resource_count_in_file(file_path, new_count):
    """Update the resource count in a specific file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match: ## 📚 Complete Resource Collection (X Resources)
        pattern = r'(## 📚 Complete Resource Collection \()\d+( Resources\))'
        replacement = f'\\g<1>{new_count}\\g<2>'
        
        updated_content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"✅ Updated {file_path}: {new_count} resources")
        return True
    except Exception as e:
        print(f"❌ Error updating {file_path}: {e}")
        return False

def update_index_file(resource_counts):
    """Update the main index.md file with current resource counts."""
    index_path = "docs/index.md"
    
    try:
        with open(index_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Define section mappings with exact patterns to match
        section_updates = [
            ('javascript-principles', r'(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(javascript-principles/resources\.md\))'),
            ('functions-callbacks', r'(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(functions-callbacks/resources\.md\))'),
            ('closure', r'(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(closure/resources\.md\))'),
            ('asynchronous-javascript', r'(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(asynchronous-javascript/resources\.md\))'),
            ('promises', r'(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(promises/resources\.md\))'),
            ('classes-prototypes', r'(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(classes-prototypes/resources\.md\))'),
            ("advanced-concepts", r"(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(advanced-concepts/resources\.md\))"),
            ("types", r"(\*\*)\d+(\s*Resources\*\* \| \[View All →\]\(types/resources\.md\))")
        ]
        
        # Update each section's resource count
        for section_key, pattern in section_updates:
            if section_key in resource_counts:
                count = resource_counts[section_key]
                replacement = f'\\g<1>{count}\\g<2>'
                content = re.sub(pattern, replacement, content)
                print(f"   📝 Updated {section_key}: {count} resources")
        
        # Update total resources count
        total_resources = sum(resource_counts.values())
        
        # Update "Total Resources" in statistics section
        total_pattern = r'(\*\*Total Resources\*\*: )\d+( carefully curated)'
        total_replacement = f'\\g<1>{total_resources}\\g<2>'
        content = re.sub(total_pattern, total_replacement, content)
        
        # Update main description
        main_pattern = r'(Master JavaScript fundamentals with \*\*)\d+( carefully curated deep technical resources\*\*)'
        main_replacement = f'\\g<1>{total_resources}\\g<2>'
        content = re.sub(main_pattern, main_replacement, content)
        
        # Update learning hours estimate (rough calculation: 1.2 hours per resource)
        learning_hours = int(total_resources * 1.2)
        hours_pattern = r'(\*\*Learning Hours\*\*: )\d+(\+ hours of deep technical content)'
        hours_replacement = f'\\g<1>{learning_hours}\\g<2>'
        content = re.sub(hours_pattern, hours_replacement, content)
        
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Updated {index_path}: Total {total_resources} resources, ~{learning_hours} learning hours")
        return True
        
    except Exception as e:
        print(f"❌ Error updating index file: {e}")
        return False

def main():
    """Main function to update all resource counts."""
    print("🔄 Starting dynamic resource count update...")
    
    # Change to docs directory
    docs_dir = Path("docs")
    if not docs_dir.exists():
        print("❌ docs/ directory not found!")
        return
    
    os.chdir(docs_dir)
    
    # Find all resource files
    resource_files = glob.glob("*/resources.md")
    resource_counts = {}
    
    print(f"\n📊 Counting resources in {len(resource_files)} files...")
    
    for file_path in resource_files:
        # Extract section name from path
        section_name = os.path.dirname(file_path)
        
        # Count resources
        count = count_resources_in_file(file_path)
        resource_counts[section_name] = count
        
        # Update the file with new count
        update_resource_count_in_file(file_path, count)
    
    # Go back to parent directory for index update
    os.chdir("..")
    
    # Update index file
    print(f"\n📝 Updating main index file...")
    update_index_file(resource_counts)
    
    # Print summary
    print(f"\n📈 Summary:")
    total = 0
    for section, count in sorted(resource_counts.items()):
        print(f"   {section}: {count} resources")
        total += count
    
    print(f"\n🎉 Total: {total} resources across all sections")
    print("✨ All resource counts updated successfully!")

if __name__ == "__main__":
    main()

