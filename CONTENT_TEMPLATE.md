# Website Content Population Template

## 📋 Overview

This template provides structured guidelines for populating all sections of your personal website with actual content, including file specifications for images/media and tagging systems.

---

## 🏠 HOME PAGE (`home.html`)

### 1. Profile Section

**Content Needed:**

- **Profile Image**: `assets/media/images/profile/profile.jpg`
  - **Specifications**: 400x600px, JPG format, max 500KB
  - **Requirements**: Professional headshot, good lighting, neutral background
- **Bio Text**: Update the existing research description with:
  - Current research focus (2-3 sentences)
  - Academic background
  - Research interests/goals
  - Personal touch/motivation

**Current placeholder to replace:**

```
My research sits at the intersection of robotics and perception...
```

### 2. News Section

**Format for each news item:**

```html
<div class="border-l-4 border-[COLOR]-500 pl-4">
  <p class="text-sm text-gray-500 dark:text-gray-400">[MONTH YEAR]</p>
  <p>[NEWS DESCRIPTION]</p>
</div>
```

**Content Template:**

- **Date**: Month Year format (e.g., "Aug 2025")
- **Description**: Brief, specific achievements
- **Color coding**:
  - `blue-500`: Publications/Papers
  - `green-500`: Awards/Grants
  - `purple-500`: Conferences/Events
  - `red-500`: Travel/Visits
  - `yellow-500`: Projects/Collaborations

**Examples to populate:**

```
Aug 2025 | Started research position at [Lab Name], CMU
Jul 2025 | Paper "[Title]" accepted to [Conference] 2025
Jun 2025 | Awarded [Grant/Fellowship Name]
```

### 3. Featured Research (3-5 items)

**For each research item:**

- **Image**: `assets/media/images/research/research-[#].jpg`
  - **Specifications**: 300x200px, JPG format, max 200KB
  - **Content**: Diagram, graph, or visual representation of research
- **Title**: Actual paper title
- **Authors**: Full author list with proper formatting
- **Venue**: Conference/journal name with year
- **Links**: Replace `#` with actual URLs:
  - `[Website]` - Project page URL
  - `[PDF]` - Paper PDF URL
  - `[Code]` - GitHub repository URL
  - `[Video]` - Demo video URL

### 4. Featured Projects (3-5 items)

**For each project:**

- **Image**: `assets/media/images/projects/project-[#].jpg`
  - **Specifications**: 300x200px, JPG format, max 200KB
  - **Content**: Screenshot, diagram, or demo image
- **Tech Tags**: Use existing classes:
  - `tech-tag-blue`: Languages (Python, JavaScript, etc.)
  - `tech-tag-green`: Frameworks (React, PyTorch, etc.)
  - `tech-tag-purple`: Tools (Docker, Git, etc.)
  - `tech-tag-yellow`: Concepts (Machine Learning, etc.)
  - `tech-tag-red`: Domains (Computer Vision, etc.)

### 5. Honors & Awards

**Format:**

```html
<li>
  <span class="font-semibold">[Award Name]</span>, [Organization], [Date]
</li>
```

---

## 🔬 RESEARCH PAGE (`research.html`)

### Research Categories

**Organize by themes:**

1. **Current Research** (Ongoing projects)
2. **Publications** (Published papers)
3. **Preprints** (Under review/arXiv)
4. **Collaborations** (Joint projects)

### Paper Entry Template

```html
<div class="section-container p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <div class="flex flex-col md:flex-row items-start">
    <div class="w-full md:w-1/4 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
      <img src="assets/media/images/research/[FILENAME].jpg" alt="[ALT_TEXT]" class="rounded-md w-full object-cover" />
    </div>
    <div class="flex-grow">
      <h3 class="text-xl font-bold mb-1">
        <a href="[PAPER_URL]" class="link-style">[PAPER_TITLE]</a>
      </h3>
      <p class="mb-2">[AUTHORS]</p>
      <p class="italic mb-3">[VENUE], [YEAR]</p>
      <p class="mb-3 text-gray-600 dark:text-gray-400">[ABSTRACT_SNIPPET]</p>
      <div class="flex space-x-4 text-lg">
        <a href="[PDF_URL]" class="link-style">[PDF]</a>
        <a href="[CODE_URL]" class="link-style">[Code]</a>
        <a href="[WEBSITE_URL]" class="link-style">[Website]</a>
      </div>
    </div>
  </div>
</div>
```

---

## 💻 PROJECTS PAGE (`projects.html`)

### Project Categories

1. **Academic Projects** (Course/research projects)
2. **Personal Projects** (Side projects)
3. **Open Source** (Contributions)
4. **Industry Projects** (Internships/work)

### Project Entry Template

```html
<div class="section-container p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <div class="flex flex-col md:flex-row items-start">
    <div class="w-full md:w-1/4 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
      <img src="assets/media/images/projects/[FILENAME].jpg" alt="[ALT_TEXT]" class="rounded-md w-full object-cover" />
    </div>
    <div class="flex-grow">
      <h3 class="text-xl font-bold mb-1">
        <a href="[PROJECT_URL]" class="link-style">[PROJECT_TITLE]</a>
      </h3>
      <p class="mb-2">[PROJECT_TYPE] • [DURATION]</p>
      <p class="italic mb-3">[PROJECT_DESCRIPTION]</p>
      <div class="flex flex-wrap gap-2 mb-3">
        [TECH_TAGS]
      </div>
      <div class="flex space-x-4 text-lg">
        <a href="[GITHUB_URL]" class="link-style">[GitHub]</a>
        <a href="[DEMO_URL]" class="link-style">[Live Demo]</a>
        <a href="[PAPER_URL]" class="link-style">[Paper]</a>
      </div>
    </div>
  </div>
</div>
```

---

## 🎯 OTHERS PAGE (`others.html`)

### Section Content Ideas

1. **Teaching & Mentoring**
2. **Talks & Presentations**
3. **Community Involvement**
4. **Technical Skills**
5. **Extracurricular Activities**

---

## 📄 CV PAGE (`cv.html`)

### Sections to Populate

1. **Education** (Degrees, GPA, relevant coursework)
2. **Research Experience** (Labs, advisors, projects)
3. **Work Experience** (Internships, TA positions)
4. **Publications** (Same as research page)
5. **Awards & Honors** (Same as home page)
6. **Skills** (Programming, tools, languages)
7. **Service** (Reviewing, organizing)

---

## 📚 RESOURCES PAGE (`resources.html`)

### Content Categories

1. **Useful Links** (Academic resources, tools)
2. **Course Materials** (Notes, assignments)
3. **Tutorials** (Technical guides you've written)
4. **Recommendations** (Books, papers, courses)

---

## 🎨 MEDIA SPECIFICATIONS

### Images

```
Profile Photos:
- Format: JPG
- Size: 400x600px (2:3 ratio)
- Max file size: 500KB
- Naming: profile.jpg

Research Images:
- Format: JPG/PNG
- Size: 300x200px (3:2 ratio)
- Max file size: 200KB
- Naming: research-1.jpg, research-2.jpg, etc.

Project Images:
- Format: JPG/PNG
- Size: 300x200px (3:2 ratio)
- Max file size: 200KB
- Naming: project-1.jpg, project-2.jpg, etc.
```

### GIFs/Animations

```
Demo GIFs:
- Format: GIF or WebP
- Size: 600x400px max
- Max file size: 2MB
- Naming: demo-[project-name].gif
- Location: assets/media/images/projects/
```

### Documents

```
CV/Resume:
- Format: PDF
- Max file size: 1MB
- Naming: cv.pdf
- Location: assets/media/documents/

Papers:
- Format: PDF
- Max file size: 5MB
- Naming: [firstname-lastname]-[year]-[short-title].pdf
```

---

## 🏷️ TAGGING SYSTEM

### Tech Tags (use existing CSS classes)

```html
<!-- Languages -->
<span class="tech-tag tech-tag-blue">Python</span>
<span class="tech-tag tech-tag-blue">JavaScript</span>
<span class="tech-tag tech-tag-blue">C++</span>

<!-- Frameworks/Libraries -->
<span class="tech-tag tech-tag-green">PyTorch</span>
<span class="tech-tag tech-tag-green">TensorFlow</span>
<span class="tech-tag tech-tag-green">React</span>

<!-- Tools -->
<span class="tech-tag tech-tag-purple">Docker</span>
<span class="tech-tag tech-tag-purple">Git</span>
<span class="tech-tag tech-tag-purple">Linux</span>

<!-- Concepts -->
<span class="tech-tag tech-tag-yellow">Machine Learning</span>
<span class="tech-tag tech-tag-yellow">Computer Vision</span>
<span class="tech-tag tech-tag-yellow">Robotics</span>

<!-- Domains -->
<span class="tech-tag tech-tag-red">Deep Learning</span>
<span class="tech-tag tech-tag-red">Data Science</span>
<span class="tech-tag tech-tag-red">Web Development</span>
```

---

## 📝 CONTENT CHECKLIST

### Before Adding Content

- [ ] Resize images to specified dimensions
- [ ] Optimize file sizes
- [ ] Check spelling and grammar
- [ ] Verify all URLs work
- [ ] Test responsive layout
- [ ] Update social media links

### Content Priority

1. **High Priority**: Profile info, current research, recent news
2. **Medium Priority**: Projects, publications, awards
3. **Low Priority**: Older content, detailed descriptions

### SEO Considerations

- Use descriptive alt text for images
- Include keywords in titles and descriptions
- Keep URLs clean and descriptive
- Add meta descriptions to pages

---

## 🔗 USEFUL LINKS TO UPDATE

### Social Media (in header/footer)

- GitHub: <https://github.com/[username>]
- LinkedIn: <https://linkedin.com/in/[username>]
- Google Scholar: <https://scholar.google.com/citations?user=[ID>]
- X/Twitter: <https://x.com/[username>]
- Instagram: <https://instagram.com/[username>]

### External Links

- University: <https://www.cmu.edu/>
- Department: [Your department URL]
- Lab: [Your lab URL]
- Advisor: [Advisor's website]

---

## 💡 TIPS

1. **Consistency**: Use the same writing style across all pages
2. **Updates**: Keep news section current (last 2 years)
3. **Quality**: Better to have fewer high-quality items than many mediocre ones
4. **Mobile**: Test all content on mobile devices
5. **Loading**: Optimize images for fast loading
6. **Accessibility**: Use descriptive alt text and proper headings
