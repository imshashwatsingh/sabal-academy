const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'olympiad.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Hero Section subtitle and description
content = content.replace(
  '<h1 class="course-hero__title">National Olympiad Preparation</h1>',
  '<h1 class="course-hero__title">Olympiad Preparation</h1>'
).replace(
  '<p class="course-hero__subtitle">Excellence in Competitive National Exams</p>',
  '<p class="course-hero__subtitle">Excellence in Competitive National & International Exams</p>'
).replace(
  '<p class="course-hero__description">Expert coaching for JSTSE, NTSE, KVPY and other prestigious olympiad exams</p>',
  '<p class="course-hero__description">Expert coaching for NSO, IMO, NSTSE, KVPY, NTSE and other prestigious olympiads</p>'
);

// Replace Course Overview completely
const newOverview = `    <!-- Course Overview -->
    <section class="course-overview">
      <div class="container">
        <div class="course-section">
          <h2 class="course-section__title" style="font-size: 1.5rem;">NSO & IMO Overview</h2>
          <p class="course-section__text">
            National Science Olympiad (NSO) and International Mathematics Olympiad (IMO) are conducted by Science Olympiad Foundation. Kindly check the official website <a href="http://www.sofworld.org" target="_blank" rel="noopener noreferrer" style="color: var(--primary-color);">www.sofworld.org</a> for the latest updates.
          </p>

          <h2 class="course-section__title" style="font-size: 1.5rem;">About the Olympiads</h2>
          <p class="course-section__text">
            <strong>Best coaching institute for NSO IMO NSTSE KVPY NTSE IIT JEE Main Advance and X / XII Board Examination preparation.</strong><br/><br/>
            National Science Olympiad and International Mathematics Olympiad are annual scholarship exams conducted by Science Olympiad Foundation and aims at cultivating scientific reasoning and logical ability among school students. Students can judge themselves academically at four different levels - within the school, at city level, at zonal / national level and at International level. Each student is provided a Student Performance Report (SPR) which analyses the strong and weak areas of the student and gives a detailed performance comparison of the student vis-à-vis other students at school, state and International level. Analysis of the student’s past 8 years’ performance is also provided.
          </p>

          <h2 class="course-section__title" style="font-size: 1.5rem;">Awards & Recognition</h2>
          <p class="course-section__text">
            <strong>Best Results - Board Exams and Competitive Entrance Tests.</strong><br/><br/>
            Prizes are announced annually and include cash awards, medals, gifts, certificates etc. Selective international toppers from each class are awarded at a grand prize distribution ceremony held in Delhi, presided over by eminent personalities. Prizes for zonal winners and school winners are sent to their respective schools. For the year 2017-18, a sum of Rs. 15.2 crores will be incurred towards awards, felicitations, scholarships etc.
          </p>

          <h2 class="course-section__title" style="font-size: 1.5rem;">Eligibility & Exam Levels</h2>
          <p class="course-section__text">
            Both NSO & IMO are conducted at two levels. Any students of classes 1st to 12th is eligible to appear for the 1st level Olympiads. Students who qualify for the 2nd level exam include:
          </p>
          <ul class="curriculum-subjects__list" style="margin-bottom: 2rem;">
            <li>Top 5% of students’ class wise, who appear for the 1st level exam.</li>
            <li>Zone wise top 25 rank holders class wise.</li>
            <li>Class toppers from each participating school where at least 10 students from a class appear in the exam & scores 50% qualifying marks. In case registration is received section wise, top 3 rank holders, irrespective of section will qualify for the 2nd level. For section wise registrations, winner(s) of gold medal may not necessarily qualify for the second level.</li>
            <li>Students from classes 1 and 2 are not required to appear for the 2nd level exam and are ranked based on their performance in the first level exam.</li>
          </ul>
        </div>
      </div>
    </section>`;

// Replace from <!-- Course Overview --> up to <!-- Course Details -->
const overviewRegex = /<!-- Course Overview -->[\s\S]*?(?=<!-- Course Details -->)/;
content = content.replace(overviewRegex, newOverview + '\n\n    ');

// Remove from <!-- Curriculum --> up to <!-- Enquiry Form -->
const curriculumRegex = /<!-- Curriculum -->[\s\S]*?(?=<!-- Enquiry Form -->)/;
content = content.replace(curriculumRegex, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated olympiad.html');
