import { teachingClass, programmingClass, researchClass, etcClass } from '../styles/sections'
import constructionismPaper from "../pdfs/recovering-constructionism-2020.pdf"
import { Link } from 'gatsby'

export const sections = [
  {
    sectionTitle: "Teaching",
    sectionClass: teachingClass,
    sectionIntro: "I teach people about technology, and I'm designing curricula to promote critical computational literacy. I believe that exploratory, learner-driven experiences help people develop powerful relationships with computational concepts, tools, and skills.",
    speechSVGPath: "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 165.551,177.692 168.932,163.396C174.639,139.269 180.665,128.592 195.433,113.335C211.664,96.569 225.675,94.333 245.888,93.064C277.814,91.058 295.037,89.712 344.002,89.18C389.864,88.682 495.322,89.346 512.181,89.625C575.09,90.666 649.355,92.12 661.66,94.395C671.967,96.3 705.87,97.541 719.669,130.02C730.427,155.339 730.087,176.897 730.665,194.323C731.623,223.16 736.176,258.788 723.367,293.524C714.118,318.605 713.857,316.685 700.127,332.29C683.4,351.302 660.68,351.149 631.947,351.121C601.709,351.092 546.605,354.539 512.808,355.212C498.293,355.501 385.406,354.041 362.392,353.089C342.54,352.267 279.851,351.906 249.07,350.139C221.662,348.566 195.579,358.505 179.383,314.68C167.037,281.27 169.604,217.331 167.672,214.089C162.829,205.963 157.734,209.976 153.643,211.533C146.719,214.168 123.333,220.673 119.921,220.673Z",
    projects: [
      {
        projectTitle: "Making with Code",
        description: "For the last two years, I’ve been designing, teaching, and researching a constructionist computer science curriculum at a secondary school in Hong Kong. The program aims to engage grade 9 and grade 10 students with a breadth of topics in computer science through personally-meaningful projects.",
        list: [
          (
            <a href="https://cs.fablearn.org">Curriculum homepage</a>
          ),
          (
            <p>Building games to learn OOP (<a href="#">project page</a>) (<a href="#">repo</a>)</p>
          ),
          (
            <p>Designing and implementing queues to explore ADTS (<a href="#">project page</a>) (<a href="#">repo</a>)</p>
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
            <p><a href="http://blessings.jacobhwolf.com/sample">sample blessing</a></p>
          ),
          (
            <p><a href="https://github.com/wolfj95/blessings-app">project repo</a></p>
          ),
        ]
      },
      {
        projectTitle: "Interneditor",
        description: "As part of the Tactical Internet Collective, I am working to reimagine the ways we conceptualize and interact with the internet. In our first major project, we are building a browser extension that allows you to make persistent edits to the web pages you visit. In doing so, we hope to diminish the divide between a user and a creator on the internet.",
        list: [
          (
            <p><a href="https://github.com/Tactical-Internetism/interneditor">project repo</a></p>
          ),
        ]
      },
      {
        projectTitle: "The Sky When You Were Born",
        description: "In response to the challenges posed by distance and differing time zones, I’ve been creating digital experiences to share with friends during momentous occasions like birthdays or graduation. This project aggregates all of the photos from Flickr taken on a particular day and tagged with “sky” (or any other tag you put in the url parameters). You can try it out for yourself by changing the date/tag in the url with date format mmddyyyy.",
        list: [
          (
            <p><a href="https://birthday-views.glitch.me/?name=Name&date=06301997&tag=sky">sample card</a></p>
          ),
          (
            <p><a href="https://glitch.com/edit/#!/birthday-views">project repo</a></p>
          ),
        ]
      }
    ]
  },
  {
    sectionTitle: "Research",
    sectionClass: researchClass,
    sectionIntro: "I'm curious about the most effective, liberating ways to teach computational literacy. Recently, I've been exploring new ways to assess computational literacy that challenge prescritive notions of traditional test-based assessment.",
    speechSVGPath: "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 164.492,180.18 167.386,165.707C171.695,144.165 166.302,121.378 210.254,103.11C269.157,78.627 396.799,87.869 461.67,88.172C509.035,88.393 680.15,82.098 701.59,119.218C721.339,153.412 716.669,172.034 715.304,196.147C713.675,224.934 704.01,259.162 696.852,271.092C673.721,309.643 643.788,296.455 595.445,302.059C565.329,305.55 507.124,302.872 473.327,303.545C458.812,303.834 375.79,305.17 356.418,305.903C344.572,306.351 249.926,308.548 209.353,294.712C187.291,287.189 180.74,254.7 172.859,230.318C171.664,226.62 168.975,210.802 166.468,208.294C165.768,207.595 157.734,209.976 153.643,211.533C146.719,214.168 123.333,220.673 119.921,220.673Z",
    projects: [
      {
        projectTitle: "Constructionism 2020 Paper",
        description: "Because of its emphasis on personal motivation, the constructionist computer science course I design and teach offers many opportunities to better understand how students relate to computational literacy. In particular, project-based assessment has allowed us to reconsider the priorities of introductory computer science education. Currently, the team working on the curriculum published a conference paper describing our vision for the course and the research we are performing on the course.",
        list: [
          (
            <p>Recovering Constructionism in Computer Science: Design of a Ninth-grade Introductory Computer Science Course <a href={constructionismPaper}>(paper)</a> <a href="http://www.constructionismconf.org/wp-content/uploads/2020/05/C2020-Proceedings.pdf">(full proceedings)</a></p>
          ),
        ]
      },
      {
        projectTitle: "Honors Thesis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur tempor tellus, ut blandit nibh tincidunt luctus. Curabitur pretium massa ultrices felis dictum, vitae aliquet neque hendrerit. Suspendisse varius arcu eget nulla ultrices, vitae congue ipsum suscipit. Vestibulum dolor augue, cursus gravida lobortis sed, tempus ut lacus. Aliquam ligula lacus, dapibus nec mollis non, lacinia eget neque. Proin porttitor in erat non vestibulum. Morbi tristique urna volutpat, consectetur nunc sed, dictum nibh. Quisque non bibendum nibh. Vestibulum leo massa, vehicula nec leo a, dapibus iaculis quam. Sed dapibus in arcu eget tincidunt.",
        list: [
          (
            <p><a href="https://stacks.stanford.edu/file/druid:gt160tf9972/Thesis%20Final.pdf">Scripting Social Learning: Investigating Students’ Perceptions of Social Constructivist Learning in Minerva’s Online Learning Environment</a></p>
          )
        ]
      }
    ]
  },
  {
    sectionTitle: "etc.",
    sectionClass: etcClass,
    sectionIntro: "I also love to cook vegetarian food and read. Here are some of the things I've enjoyed recently.",
    speechSVGPath: "M119.921,220.673C119.921,220.673 141.464,206.977 142.446,205.995C145.398,203.044 149.953,199.806 152.948,197.202C164.651,187.026 168.019,176.974 173.329,163.683C184.27,136.293 190.436,121.369 207.643,112.546C226.982,102.629 239.551,100.536 259.763,99.266C291.69,97.26 300.038,96.293 349.002,95.761C394.865,95.263 498.57,102.12 515.429,102.399C578.337,103.44 653.258,103.731 665.563,106.005C675.87,107.91 708.145,104.718 721.467,137.526C729.717,157.842 727.719,172.586 720.47,186.775C708.874,209.477 678.401,221.424 649.357,225.005C620.377,228.578 558.687,229.655 524.899,228.466C498.255,227.528 408.589,225.988 385.563,225.938C366.077,225.896 300.099,222.584 264.551,224.019C236.224,225.163 205.226,232.816 183.331,219.869C172.893,213.697 174.837,207.932 168.641,205.828C163.517,204.088 158.846,207.571 153.156,210.645C145.555,214.75 123.333,220.673 119.921,220.673Z",
    projects: [
      {
        projectTitle: "Making with Code",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur tempor tellus, ut blandit nibh tincidunt luctus. Curabitur pretium massa ultrices felis dictum, vitae aliquet neque hendrerit. Suspendisse varius arcu eget nulla ultrices, vitae congue ipsum suscipit. Vestibulum dolor augue, cursus gravida lobortis sed, tempus ut lacus. Aliquam ligula lacus, dapibus nec mollis non, lacinia eget neque. Proin porttitor in erat non vestibulum. Morbi tristique urna volutpat, consectetur nunc sed, dictum nibh. Quisque non bibendum nibh. Vestibulum leo massa, vehicula nec leo a, dapibus iaculis quam. Sed dapibus in arcu eget tincidunt.",
        list: [
          (
            <p>something here</p>
          )
        ]
      },
      {
        projectTitle: "Evaluating EdTech",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur tempor tellus, ut blandit nibh tincidunt luctus. Curabitur pretium massa ultrices felis dictum, vitae aliquet neque hendrerit. Suspendisse varius arcu eget nulla ultrices, vitae congue ipsum suscipit. Vestibulum dolor augue, cursus gravida lobortis sed, tempus ut lacus. Aliquam ligula lacus, dapibus nec mollis non, lacinia eget neque. Proin porttitor in erat non vestibulum. Morbi tristique urna volutpat, consectetur nunc sed, dictum nibh. Quisque non bibendum nibh. Vestibulum leo massa, vehicula nec leo a, dapibus iaculis quam. Sed dapibus in arcu eget tincidunt.",
        list: [
          (
            <p>something here</p>
          )
        ]
      }
    ]
  }
]
