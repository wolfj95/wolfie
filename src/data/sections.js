import { teachingClass, programmingClass, researchClass, etcClass } from '../styles/sections'
import constructionismPaper from "../pdfs/recovering-constructionism-2020.pdf"
import patchworkPaper from "../pdfs/patchwork-2018.pdf"

export const sections = [
  {
    sectionTitle: "Research",
    sectionClass: researchClass,
    sectionIntro: "As a PhD student at Harvard Graduate School of Education in Human Development, Learning, and Teaching (with a secondary in Anthropology), I use qualitative research methods, primarily ethnographic methodologies, to better understand how the ways people learn about computing shape their worldviews.",
    speechSVGPath: "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 164.492,180.18 167.386,165.707C171.695,144.165 166.302,121.378 210.254,103.11C269.157,78.627 396.799,87.869 461.67,88.172C509.035,88.393 680.15,82.098 701.59,119.218C721.339,153.412 716.669,172.034 715.304,196.147C713.675,224.934 704.01,259.162 696.852,271.092C673.721,309.643 643.788,296.455 595.445,302.059C565.329,305.55 507.124,302.872 473.327,303.545C458.812,303.834 375.79,305.17 356.418,305.903C344.572,306.351 249.926,308.548 209.353,294.712C187.291,287.189 180.74,254.7 172.859,230.318C171.664,226.62 168.975,210.802 166.468,208.294C165.768,207.595 157.734,209.976 153.643,211.533C146.719,214.168 123.333,220.673 119.921,220.673Z",
    projects: [
      {
        projectTitle: "Qualitative Research Methods in Education",
        description: "My current PhD research focuses on developing and applying qualitative research methodologies to understand how learning experiences shape learners' perspectives. This work bridges educational research and anthropological methods to examine the cultural dimensions of learning.",
        list: [
          (
            <p>Wolf, J., Yoo, H. P. (2025). Epistemology in Practice: Exploring Standards of Quality in Qualitative Education Research. Full paper at 2025 AERA Annual Meeting. Denver, CO.</p>
          ),
        ]
      },
      {
        projectTitle: "Constructionism and Computational Identity",
        description: "Building on my previous work in computer science education, this research explores how constructionist learning environments support students in developing computational identities. This work examines the intersection of learning theory, identity development, and computing education.",
        list: [
          (
            <p>Wolf, J., Han, J., Proctor, C., Brown, E., & Blikstein, P. (2023). Constructing Computational Identities: Exploring Constructionism and Identity in an Introductory High School Computer Science Course. Full paper in Proceedings of the 2023 Constructionism Conference. New York, USA.</p>
          ),
          (
            <p>Recovering Constructionism in Computer Science: Design of a Ninth-grade Introductory Computer Science Course <a href={constructionismPaper}>(paper)</a> <a href="http://www.constructionismconf.org/wp-content/uploads/2020/05/C2020-Proceedings.pdf">(full proceedings)</a></p>
          ),
        ]
      },
      {
        projectTitle: "Technology and Social Learning",
        description: "In the time before all learning became online learning, I was curious about how technological mediation impacted the social dimensions of learning. Following this curiosity, I interviewed students attending an elite online university to try to understand technology's effect on their social learning environment. These interviews formed the basis of my senior honor's thesis exploring the impacts of technologically-mediated social scripting in online learning environments.",
        list: [
          (
            <p><a href="https://stacks.stanford.edu/file/druid:gt160tf9972/Thesis%20Final.pdf">Scripting Social Learning: Investigating Students' Perceptions of Social Constructivist Learning in Minerva's Online Learning Environment</a></p>
          )
        ]
      },
      {
        projectTitle: "Computing & Identity",
        description: "As part of a course exploring the practical skills and theoretical frameworks of learning technology design, I was curious about the way children learn about identity. With a team of other students, I developed and researched a construction kit integrating the expressive nature of clothing with the computational power of e-textiles.",
        list: [
          (
            <p><a href={patchworkPaper}>Patchwork: An Expressive E-Textile Construction Kit</a></p>
          )
        ]
      }
    ]
  },
  {
    sectionTitle: "Teaching",
    sectionClass: teachingClass,
    sectionIntro: "Through my work as an educator, I have designed curricula to promote critical computational literacy. I believe that exploratory, learner-driven experiences help people develop powerful relationships with computational concepts, tools, and skills.",
    speechSVGPath: "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 165.551,177.692 168.932,163.396C174.639,139.269 180.665,128.592 195.433,113.335C211.664,96.569 225.675,94.333 245.888,93.064C277.814,91.058 295.037,89.712 344.002,89.18C389.864,88.682 495.322,89.346 512.181,89.625C575.09,90.666 649.355,92.12 661.66,94.395C671.967,96.3 705.87,97.541 719.669,130.02C730.427,155.339 730.087,176.897 730.665,194.323C731.623,223.16 736.176,258.788 723.367,293.524C714.118,318.605 713.857,316.685 700.127,332.29C683.4,351.302 660.68,351.149 631.947,351.121C601.709,351.092 546.605,354.539 512.808,355.212C498.293,355.501 385.406,354.041 362.392,353.089C342.54,352.267 279.851,351.906 249.07,350.139C221.662,348.566 195.579,358.505 179.383,314.68C167.037,281.27 169.604,217.331 167.672,214.089C162.829,205.963 157.734,209.976 153.643,211.533C146.719,214.168 123.333,220.673 119.921,220.673Z",
    projects: [
      {
        projectTitle: "Making with Code",
        description: "I designed, taught, and researched a constructionist computer science curriculum at a secondary school in Hong Kong. The program engaged grade 9 and grade 10 students with a breadth of topics in computer science through personally-meaningful projects.",
        list: [
          (
            <a href="https://cs.fablearn.org">Curriculum homepage</a>
          ),
          (
            <p>Example project: Making animations with turtle to learn Python basics (<a href="http://cs.fablearn.org/courses/cs9/unit00/project/">project page</a>) (<a href="https://github.com/the-isf-academy/project-animation">repo</a>)</p>
          ),
          (
            <p>Example project: Designing and implementing queues to explore ADTS (<a href="http://cs.fablearn.org/courses/cs10/unit01/project/">project page</a>) (<a href="https://github.com/the-isf-academy/project-queue">repo</a>)</p>
          )
        ]
      },
      {
        projectTitle: "Evaluating EdTech",
        description: "After taking a class about designing education technologies, my friend Jenny Han and I decided that we needed a more solid framework to evaluate the impact edtech had on students and society. So, we designed and led a seminar investigating the intersection of our technical education and learning philosophies/frameworks like critical pedagogy, constructivism, behaviorism, and social reconstructionism.",
        list: [
          (
            <a href="https://docs.google.com/document/d/e/2PACX-1vR2e6L6I58liGUSzHOlHw_rJY3MxGVThr2O-MrlB4lLGDqfAbQ_8TF9y3RyJYrsPVd2WSE6vQC_ij55/pub">Syllabus</a>
          ),
        ]
      }
    ]
  },
  {
    sectionTitle: "Programming",
    sectionClass: programmingClass,
    sectionIntro: "I liking building things that help me connect with people, near and far (and especially far in the last year 🙃). Projects like these help me explore and expand the idea of who and what technology is \"for.\"",
    speechSVGPath: "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 164.492,180.18 167.386,165.707C171.695,144.165 166.302,121.378 210.254,103.11C269.157,78.627 396.799,87.869 461.67,88.172C509.035,88.393 680.15,82.098 701.59,119.218C721.339,153.412 716.669,172.034 715.304,196.147C713.675,224.934 704.01,259.162 696.852,271.092C673.721,309.643 643.788,296.455 595.445,302.059C565.329,305.55 507.124,302.872 473.327,303.545C458.812,303.834 375.79,305.17 356.418,305.903C344.572,306.351 249.926,308.548 209.353,294.712C187.291,287.189 180.74,254.7 172.859,230.318C171.664,226.62 168.975,210.802 166.468,208.294C165.768,207.595 157.734,209.976 153.643,211.533C146.719,214.168 123.333,220.673 119.921,220.673Z",
    projects: [
      {
        projectTitle: "Blessings",
        description: "As 2020 ended, I built a web app to share blessings for 2021 with the people I care about. There is often an urgency around learning computational skills and concepts in order to generate economic value through scale. However, with this project I wanted to see what other forms of value (social, spiritual, emotional, etc.) I could produce by focusing on building something for a small, personally-meaningful group of people.",
        list: [
          (
            <p><a href="http://blessings.wolfie.dev/sample">Sample blessing</a></p>
          ),
          (
            <p><a href="https://github.com/wolfj95/blessings-app">Project repo</a></p>
          ),
        ]
      },
      {
        projectTitle: "Interneditor",
        description: "As part of the Tactical Internet Collective, I am working to reimagine the ways we conceptualize and interact with the internet. In our first major project, we are building a browser extension that allows you to make persistent edits to the web pages you visit. In doing so, we hope to diminish the divide between a user and a creator on the internet.",
        list: [
          (
            <p><a href="https://github.com/Tactical-Internetism/interneditor">Project repo</a></p>
          ),
        ]
      },
      {
        projectTitle: "The Sky When You Were Born",
        description: "In response to the challenges posed by distance and differing time zones, I've been creating digital experiences to share with friends during momentous occasions like birthdays or graduation. This project aggregates all of the photos from Flickr taken on a particular day and tagged with 'sky' (or any other tag you put in the url parameters). You can try it out for yourself by changing the date/tag in the url with date format mmddyyyy.",
        list: [
          (
            <p><a href="https://birthday-views.glitch.me/?name=Name&date=06301997&tag=sky">Sample card</a></p>
          ),
          (
            <p><a href="https://glitch.com/edit/#!/birthday-views">Project repo</a></p>
          ),
        ]
      }
    ]
  },
  {
    sectionTitle: "etc.",
    sectionClass: etcClass,
    sectionIntro: "I also love to cook vegetarian food, read, and listen to music and podcasts while running or hiking.",
    speechSVGPath: "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 168.019,176.974 173.329,163.683C184.27,136.293 190.436,121.369 207.643,112.546C226.982,102.629 239.551,100.536 259.763,99.266C291.69,97.26 300.038,96.293 349.002,95.761C394.865,95.263 498.57,102.12 515.429,102.399C578.337,103.44 653.258,103.731 665.563,106.005C675.87,107.91 708.145,104.718 721.467,137.526C729.717,157.842 727.719,172.586 720.47,186.775C708.874,209.477 678.401,221.424 649.357,225.005C620.377,228.578 558.687,229.655 524.899,228.466C498.255,227.528 408.589,225.988 385.563,225.938C366.077,225.896 300.099,222.584 264.551,224.019C236.224,225.163 205.226,232.816 183.331,219.869C172.893,213.697 174.837,207.932 168.641,205.828C163.517,204.088 158.846,207.571 153.156,210.645C145.555,214.75 123.333,220.673 119.921,220.673Z",
    projects: [
      {
        projectTitle: "Reading",
        description: "I enjoy science fiction, creative nonfiction essays, and generally anything that helps me make sense of this weird and wonderful world. Here's some writing I've enjoyed recently:",
        list: [
          (
            <p><em>How To Do Nothing</em> by Jenny Odell</p>
          ),
          (
            <p><a href="https://www.newyorker.com/magazine/2020/08/03/heirlooms">"Heirlooms"</a> by Bryan Washington</p>
          ),
          (
            <p><em>Uncanny Valley</em> by Anna Wiener</p>
          ),
          (
            <p>The <em>Broken Earth</em> Trilogy by N.K. Jemisin</p>
          )
        ]
      },
      {
        projectTitle: "Cooking",
        description: "Generally, I like to try to imagine vegetarian versions of the more meaty dishes I grew up eating like pulled pork. However, during the pandemic I got really into perfecting staples like bread, stew, and pickled goods. Here are some of the things I've cooked a lot in the last year:",
        list: [
          (
            <p><a href="https://www.saltfatacidheat.com/fat/ligurian-focaccia">Samin Nosrat's Focaccia</a> but with my sourdough starter</p>
          ),
          (
            <p><a href="https://www.theperfectloaf.com/sourdough-pizza-dough-and-recipes/#tasty-recipes-12381">This pizza dough from Maurizio Leo</a> (also with my sourdough starter)</p>
          ),
          (
            <p>A riff off <a href="https://cooking.nytimes.com/recipes/1019772-spiced-chickpea-stew-with-coconut-and-turmeric">Allison Roman's chickpea stew</a> but with canned tomatoes</p>
          )
        ]
      },
      {
        projectTitle: "Listening",
        description: "Judging by my Spotify Unwrapped stats, I leaned heavily (maybe a little too much so) on auditory experiences to get me through 2020. These are some of the podcasts and albums I kept returning to:",
        list: [
          (
            <p><a href="https://gimletmedia.com/shows/reply-all">Reply All</a> podcast</p>
          ),
          (
            <p><a href="https://techwontsave.us/">Tech Won't Save Us</a> podcast</p>
          ),
          (
            <p><em>Dreamland</em> by <a href="https://opensource.glassanimals.com/">Glass Animals</a></p>
          ),
          (
            <p><a href="https://blowback.show/">BLOWBACK</a> podcast</p>
          )
        ]
      }

    ]
  }
]