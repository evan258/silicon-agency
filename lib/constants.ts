import featureIdea from "@/assets/feature-idea.png";
import featureAward from "@/assets/feature-award.png";
import featureTeam from "@/assets/feature-team.png";
import projectFigure from "@/assets/project-figure.jpg";
import projectMasks from "@/assets/project-masks.jpg";
import projectWhale from "@/assets/project-whale.jpg";
import projectBurst from "@/assets/project-burst.jpg";
import trustedLogo1 from "@/assets/trusted-logo-1.png";
import trustedLogo2 from "@/assets/trusted-logo-2.png";
import trustedLogo3 from "@/assets/trusted-logo-3.png";
import trustedLogo4 from "@/assets/trusted-logo-4.png";
import trustedLogo5 from "@/assets/trusted-logo-5.png";
import trustedLogo6 from "@/assets/trusted-logo-6.png";
import award1 from "@/assets/award-1.png";
import award2 from "@/assets/award-2.png";
import award3 from "@/assets/award-3.png";
import award4 from "@/assets/award-4.png";
import blogWatch from "@/assets/blog-watch.png";
import blogAstronaut from "@/assets/blog-astronaut.png";
import blogLaptop from "@/assets/blog-laptop.png";
import portfolioAstronaut from "@/assets/portfolio-astronaut.jpg";
import portfolioHeadphones from "@/assets/portfolio-headphones.jpg";
import portfolioMasks from "@/assets/portfolio-masks.jpg";
import portfolioWhale from "@/assets/portfolio-whale.jpg";
import portfolioBurst from "@/assets/portfolio-burst.jpg";
import portfolioPhone from "@/assets/portfolio-phone.jpg";
import teamJenny from "@/assets/team-jenny.jpg";
import teamRalph from "@/assets/team-ralph.jpg";
import facebookIcon from "@/assets/fb.svg";
import instagramIcon from "@/assets/ig.svg";
import twitterIcon from "@/assets/twitter.svg";
import linkedinIcon from "@/assets/in.svg";
import youtubeIcon from "@/assets/yt.svg";
import dribbbleIcon from "@/assets/dribble.svg";
import postAuthor from "@/assets/post-author.png";
import { ChartLine, ChartColumn, Clock, MessagesSquare, Monitor, Presentation, Rocket, Search, Smartphone, Timer } from "lucide-react";
import offerIcon1 from "@/assets/what-we-offer-icon-1.svg";
import offerIcon2 from "@/assets/what-we-offer-icon-2.svg";
import offerIcon3 from "@/assets/what-we-offer-icon-3.svg";
import offerIcon4 from "@/assets/what-we-offer-icon-4.svg";
import quoteJane from "@/assets/quote-jane.png";
import commentEsther from "@/assets/comment-esther.png";
import commentCameron from "@/assets/comment-cameron.png";
import authorAnnette from "@/assets/author-annette.png";
import authorMarvin from "@/assets/author-marvin.png";
import blogPost1 from "@/assets/blog-post-1.jpg";
import blogPost2 from "@/assets/blog-post-2.jpg";
import blogPost3 from "@/assets/blog-post-3.jpg";
import blogPost4 from "@/assets/blog-post-4.jpg";
import blogPost5 from "@/assets/blog-post-5.jpg";
import blogPost6 from "@/assets/blog-post-6.jpg";
import blogPost7 from "@/assets/blog-post-7.jpg";
import blogPost8 from "@/assets/blog-post-8.jpg";
import blogPost9 from "@/assets/blog-post-9.jpg";
import authorJerome from "@/assets/author-jerome.png";
import authorRalph from "@/assets/author-ralph.png";
import authorEsther from "@/assets/author-esther.png";
import authorJane from "@/assets/author-jane.png";
import authorAlbert from "@/assets/author-albert.png";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const PROMO_VIDEO_URL = "https://www.youtube.com/embed/l6shgiK9Z-k?start=1";

export const FEATURES = [
  {
    title: "Creative Solutions",
    text: "Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.",
    icon: featureIdea,
  },
  {
    title: "Award Winning",
    text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.",
    icon: featureAward,
  },
  {
    title: "Team of Professionals",
    text: "Nam venenatis urna aenean quis feugiat et senectus turpis.",
    icon: featureTeam,
  },
];

// Grid placement of the collage: one tall image, two squares, one wide image
export const FEATURED_PROJECTS = [
  { image: projectFigure, alt: "Figure with a glowing moon", className: "aspect-square sm:row-span-2 sm:aspect-auto" },
  { image: projectMasks, alt: "Two sculpted faces on a cyan background", className: "aspect-square" },
  { image: projectWhale, alt: "Low poly whale", className: "aspect-square" },
  { image: projectBurst, alt: "Colorful burst of shards", className: "aspect-856/416 sm:col-span-2" },
];

const COMPETENCY_TEXT =
  "Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.";

export const COMPETENCIES = [
  { title: "Digital Marketing", text: COMPETENCY_TEXT },
  { title: "Web Development", text: COMPETENCY_TEXT },
  { title: "Application Development", text: COMPETENCY_TEXT },
  { title: "Strategy", text: COMPETENCY_TEXT },
  { title: "Digital Advertising", text: COMPETENCY_TEXT },
];

export const FOOTER_LINKS = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Linkedin", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

export const TRUSTED_LOGOS = [trustedLogo1, trustedLogo2, trustedLogo3, trustedLogo4, trustedLogo5, trustedLogo6];

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const TESTIMONIALS = [
  {
    text: "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.",
    name: "Ralph Edwards",
    role: "Head of Marketing",
  },
  { text: LOREM, name: "Jane Cooper", role: "Product Manager" },
  { text: LOREM, name: "Cody Fisher", role: "Chief Executive Officer" },
  { text: LOREM, name: "Esther Howard", role: "Creative Director" },
];

// The award images already include their captions
export const AWARDS = [
  { image: award1, alt: "The Webby Awards, 4x mobile of the day" },
  { image: award2, alt: "CSSDA, 1x Kudos" },
  { image: award3, alt: "Awwwards, 3x website of the day" },
  { image: award4, alt: "FWA, 2x best website" },
];

export const HOME_BLOG_POSTS = [
  { title: "A study on smartwatch design qualities and people’s preferences", tag: "Digital", time: "12 hours ago", image: blogWatch, author: "Jerome Bell", role: "Marketing Specialist", avatar: authorJerome },
  { title: "Brand analysis: second step to the brand identity", tag: "Design", time: "1 day ago", image: blogAstronaut, author: "Annette Black", role: "Product Manager", avatar: authorAnnette },
  { title: "How to check the website before releasing it?", tag: "Tips & Advice", time: "May 24, 2021", image: blogLaptop, author: "Marvin McKinney", role: "Senior UI/UX Designer", avatar: authorMarvin },
];

export const PORTFOLIO_CATEGORIES = ["All Works", "Web Design", "Graphic Design", "Branding", "UI / UX", "Motion Design"];

// Only the first six projects come from the design, the rest are placeholders so the pager shows up
const FIRST_PROJECTS = [
  {
    title: "Astronaut & Flashing Neon Lights",
    image: portfolioAstronaut,
    tags: ["Graphic Design", "Art", "Motion Design"],
  },
  {
    title: "Scene of Sunglasses & Headphone on Human Head",
    image: portfolioHeadphones,
    tags: ["NFT", "Graphic Design", "Art", "Identity", "Motion Design"],
  },
  {
    title: "Plaster Antique Sculpture in a Pop Art Style",
    image: portfolioMasks,
    tags: ["Graphic Design", "Art", "Branding"],
  },
  {
    title: "Big Blue Whale Shape",
    image: portfolioWhale,
    tags: ["Web Design", "UI / UX", "Motion Design"],
  },
  {
    title: "3D Shape Illustration",
    image: portfolioBurst,
    tags: ["Graphic Design", "Art", "Web Design"],
  },
  {
    title: "Mannequin Hands Holding Phone",
    image: portfolioPhone,
    tags: ["UI / UX", "Branding", "Web Design"],
  },
];

const MORE_TITLES = [
  "Lorem Ipsum Dolor Sit Amet",
  "Consectetur Adipiscing Elit Sed Do",
  "Eiusmod Tempor Incididunt Ut Labore",
  "Magna Aliqua Ut Enim Ad Minim",
  "Veniam Quis Nostrud Exercitation",
  "Ullamco Laboris Nisi Ut Aliquip",
  "Duis Aute Irure Dolor in Reprehenderit",
  "Voluptate Velit Esse Cillum Dolore",
  "Fugiat Nulla Pariatur Excepteur",
  "Sint Occaecat Cupidatat Non Proident",
  "Sunt in Culpa Qui Officia Deserunt",
  "Mollit Anim Id Est Laborum",
];

export const PORTFOLIO_PROJECTS = [
  ...FIRST_PROJECTS,
  ...MORE_TITLES.map((title, i) => ({ ...FIRST_PROJECTS[i % 6], title })),
];

export const ABOUT_STATS = [
  { value: "2,480", bold: "Remote", text: " Sales\nExperts" },
  { value: "1,200", bold: "Requests", text: "\nper Week" },
  { value: "760", bold: "New Clients", text: "\nper Month" },
];

export const CLIENT_REVIEWS = [
  {
    text: "Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.",
    name: "Annette Black",
    role: "QA Engineer in Company Name",
  },
  { text: LOREM, name: "Jerome Bell", role: "Marketing Specialist in Company Name" },
  { text: LOREM, name: "Marvin McKinney", role: "Product Manager in Company Name" },
];

// Only the first two photos are filled in the design export, the others show an empty slot
export const TEAM = [
  { name: "Jenny Wilson", role: "Founder & CEO", image: teamJenny },
  { name: "Ralph Edwards", role: "Co-Founder", image: teamRalph },
  { name: "Cameron Williamson", role: "Strategic Advisor", image: null },
  { name: "Jerome Bell", role: "Marketing Specialist", image: null },
  { name: "Marvin McKinney", role: "Product Manager", image: null },
  { name: "Esther Howard", role: "VP of Strategy", image: null },
  { name: "Darrell Steward", role: "Senior Project Manager", image: null },
  { name: "Jane Cooper", role: "Principal Consultant", image: null },
];

export const SOCIAL_NETWORKS = [
  { name: "Facebook", handle: "silicon", icon: facebookIcon, href: "https://facebook.com" },
  { name: "Instagram", handle: "@silicon", icon: instagramIcon, href: "https://instagram.com" },
  { name: "Twitter", handle: "@silicon", icon: twitterIcon, href: "https://twitter.com" },
  { name: "Linkedin", handle: "Silicon Inc.", icon: linkedinIcon, href: "https://linkedin.com" },
  { name: "YouTube", handle: "Silicon", icon: youtubeIcon, href: "https://youtube.com" },
  { name: "Dribbble", handle: "Silicon", icon: dribbbleIcon, href: "https://dribbble.com" },
];

export const BLOG_CATEGORIES = ["Business", "Digital", "Processes & Tools", "Marketing", "Startups", "Strategy"];

// The design has no description for the list view, so every post uses this placeholder
export const BLOG_DESCRIPTION =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.";

export const BLOG_POSTS = [
  { title: "5 Bad Landing Page Examples & How We Would Fix Them", category: "Business", date: "May 19, 2021", author: "Jerome Bell", avatar: authorJerome, image: blogPost1 },
  { title: "Why UX Design Matters and How it Affects Ranking", category: "Digital", date: "Sep 28, 2021", author: "Jerome Bell", avatar: authorJerome, image: blogPost2 },
  { title: "This Week in Search: New Limits and Exciting Features", category: "Business", date: "Sep 16, 2021", author: "Ralph Edwards", avatar: authorRalph, image: blogPost3 },
  { title: "Five Effective Lead Generation Techniques For Your Business", category: "Processes & Tools", date: "12 hours ago", author: "Esther Howard", avatar: authorEsther, image: blogPost4 },
  { title: "Inclusive Marketing: Why and How Does it Work?", category: "Digital", date: "Oct 9, 2021", author: "Jane Cooper", avatar: authorJane, image: blogPost5 },
  { title: "How Agile is Your Forecasting Process?", category: "Marketing", date: "Apr 2, 2021", author: "Albert Flores", avatar: authorAlbert, image: blogPost6 },
  { title: "Your Guide to Optimising A JavaScript-enabled Website", category: "Processes & Tools", date: "Sep 3, 2021", author: "Ralph Edwards", avatar: authorRalph, image: blogPost7 },
  { title: "A Study on Smartwatch Design Qualities and People’s Preferences", category: "Startups", date: "Sep 10, 2021", author: "Esther Howard", avatar: authorEsther, image: blogPost8 },
  { title: "This Long-Awaited Technology May Finally Change the World", category: "Strategy", date: "Sep 16, 2021", author: "Ralph Edwards", avatar: authorRalph, image: blogPost9 },
];

export const NEWSLETTER_TOPICS = [
  "Daily Newsletter",
  "Advertising Updates",
  "Week in Review",
  "Event Updates",
  "Startups Weekly",
  "Podcasts",
];

// The article body is the same for every post, only the title changes
export const POST_META = {
  tag: "Technology",
  time: "12 hours ago",
  likes: 8,
  comments: 4,
  shares: 2,
  author: "Albert Flores",
  avatar: postAuthor,
};

export const POST_QUOTE = { name: "Jane Cooper", role: "CEO of Ipsum Company", avatar: quoteJane };

export const POST_TAGS = ["#lifestyle", "#tech", "#business"];

export const POST_COMMENTS = [
  {
    name: "Esther Howard",
    time: "4 min ago",
    avatar: commentEsther,
    text: "Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper dolor sit mauris. Hendrerit eu libero, eu tristique sodales ultrices etiam adipiscing. Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus.",
    reply: null,
  },
  {
    name: "Ralph Edwards",
    time: "September 9 at 12:48",
    avatar: authorRalph,
    text: "Eget amet, ac scelerisque tellus sed. Sapien duis sit neque pulvinar. Est sit aenean nisl etiam donec mattis ut diam. Luctus massa eu nunc aliquam viverra tempus, eu amet, luctus. Ac faucibus vestibulum eu lacus. Ullamcorper sem ultrices tincidunt pharetra?",
    reply: {
      name: "Albert Flores",
      time: "16 hours ago",
      avatar: authorAlbert,
      mention: "@Ralph Edwards",
      text: " Vulputate malesuada amet, consequat ullamcorper. Orci, cras maecenas in sit purus pellentesque. Ridiculus blandit pellentesque eget arcu morbi nisl. Morbi volutpat adipiscing sapien sed ut tempor.",
    },
  },
  {
    name: "Cameron Williamson",
    time: "March 24 at 8:20",
    avatar: commentCameron,
    text: "Mattis id ut sed arcu metus elit faucibus condimentum aliquam. Nam adipiscing diam et suspendisse. Sagittis massa maecenas laoreet nulla amet nunc sagittis, pulvinar neque. Duis imperdiet ipsum suspendisse massa lectus habitasse. Id ante volutpat hendrerit augue parturient eget. Ac vitae posuere leo morbi vitae at hac lectus. Nibh neque quam quis amet mattis sit. Faucibus risus at sit tempus ut.",
    reply: null,
  },
];

// Related articles reuse three of the blog posts, the first one has a different author in the design
export const RELATED_POSTS = [
  { ...BLOG_POSTS[0], author: "Marvin McKinney", avatar: authorMarvin },
  BLOG_POSTS[5],
  BLOG_POSTS[2],
];

// The icons are placeholders until the icons from the design are added
export const SERVICES = [
  {
    title: "Custom Software Development",
    text: "Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.",
    icon: Monitor,
  },
  {
    title: "Software Integration",
    text: "Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.",
    icon: Rocket,
  },
  {
    title: "Mobile App Development",
    text: "Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi.",
    icon: Smartphone,
  },
  {
    title: "Business Analytics",
    text: "Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet nunc a sed.",
    icon: ChartLine,
  },
  {
    title: "Software Testing",
    text: "Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.",
    icon: Search,
  },
  {
    title: "Project Management",
    text: "Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.",
    icon: Timer,
  },
];

export const SERVICE_REVIEWS = [
  {
    text: "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris.",
    name: "Ralph Edwards",
    role: "Head of Marketing",
  },
  { text: LOREM, name: "Jane Cooper", role: "Product Manager" },
  { text: LOREM, name: "Cody Fisher", role: "Chief Executive Officer" },
];

export const WHY_CHOOSE_US = [
  { title: "Build a functional prototype in 24 hrs", icon: Clock },
  { title: "Create an MVP within two weeks", icon: Presentation },
  { title: "Kickstart software development", icon: ChartColumn },
  { title: "Get 24/7 tech & business support", icon: MessagesSquare },
];

export const SERVICE_OPTIONS = SERVICES.map((service) => service.title);

export const CONTACT_INFO = {
  phone: "(406) 555-0120",
  email: "example@gmail.com",
  address: "2464 Royal Ln. Mesa, New Jersey 45463",
};

export const SERVICE_OFFERS = [
  {
    title: "Innovative Solutions",
    text: "Massa enim libero dictum consectetur convallis lobortis cursus mi a magna ullamcorper consectetur.",
    icon: offerIcon1,
  },
  {
    title: "Success Guarantee",
    text: "At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam.",
    icon: offerIcon2,
  },
  {
    title: "Professional Team",
    text: "Pellentesque rhoncus viverra vestibu, purus purus quisque qui vestibulum facilisis dictumst consequat.",
    icon: offerIcon3,
  },
  {
    title: "On Time Service",
    text: "Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget neque adipiscing.",
    icon: offerIcon4,
  },
];

export const WORK_STEPS = [
  {
    title: "Identifying the problem",
    text: "Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur.",
  },
  {
    title: "Conducting a research",
    text: "At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam.",
  },
  {
    title: "Creating low-fidelity prototypes",
    text: "Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque vestibulum facilisis dictumst consequat.",
  },
  {
    title: "Building an MVP version",
    text: "Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur.",
  },
];

export const PRODUCT_POINTS = [
  "Quis euismod lacus, at consectetur porta",
  "Dictumst enim lectus dis eget non metus cras",
  "Risus volutpat tellus hendrerit nibh",
];
