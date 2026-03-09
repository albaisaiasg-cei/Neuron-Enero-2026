/*Variables*/
/*Variables - menuNav*/
let menuNav = document.getElementById('menuNav')
/* /Variables - menuNav*/

/*Variables - news*/
const newsContainer = document.getElementById('postsGrid') // Almacenar postGrid como variable

let news = [
    /*Post 1*/{image:'media/img/News-1.webp', title: 'The Ultimate Guide to Digital Transformation for Small...', description: 'Embracing digital transformation is essential for small businesses seeking growth and resilience...'},
    /*Post 2*/{image: 'media/img/News-2.webp', title: 'Why Cloud Solutions Are the Backbone of Modern Enterprises', description: 'Cloud technologies offer flexibility, security, and scalability for all types of organizations. Learn how cloud solutions...'},
    /*Post 3*/{image: 'media/img/News-3.webp', title: 'Automate to Innovate: How Workflow Automation Boosts...', description: 'Implementing workflow automation helps eliminate repetitive tasks and human error. Explore key automation tools and...'},
    /*Post 4*/{image: 'media/img/News-4.webp', title: 'Data-Driven Decisions: Leveraging Analytics in Your Company', description: 'Transform your business with data-driven insights that guide smarter decision-making. See how adopting analytics...'},
    /*Post 5*/{image: 'media/img/News-5.webp', title: 'Cybersecurity Essentials Every Business Should Know', description: 'Protecting your digital assets is critical in a connected world. Uncover the most important cybersecurity practices...'},
    /*Post 6*/{image: 'media/img/News-6.webp', title: 'Remote Work Revolution: Tools and Tips for Seamless...', description: 'Remote work is here to stay, and with the right tools, your team can thrive from anywhere.'},
    /*Post 7*/{image: 'media/img/News-7.webp', title: 'From Paper to Pixel: Digitizing Your Business Processes', description: 'Transitioning from manual to digital processes reduces errors and accelerates workflows.'},
    /*Post 8*/{image: 'media/img/News-8.webp', title: 'Customer Experience in the Digital Age: Best Practices to Stand Out', description: 'Digital tools allow you to personalize and enhance customer interactions. Learn how to deliver outstanding...'},
    /*Post 9*/{image: 'media/img/News-9.webp', title: 'Overcoming the Challenges of Digital Adoption in Traditional...', description: 'Adopting new technologies can be daunting for established industries. Explore practical solutions for managing resistance...'}
]
/* Variables - news*/
/* /Variables*/

/*Funciones*/
/*Funciones - Toggle menu*/
function toggleMenu() {
    menuNav.classList.toggle('active')
}
/* /Funciones - Toggle menu*/

/*Funciones - News generation*/
news.forEach(single => {
    let singlePost = document.createElement('div')
    singlePost.classList.add('posts__card')
    singlePost.innerHTML = `
        <picture>    
            <img src="${single.image}" alt"${single.title}">
        </picture>
        <h4>${single.title}</h4>
        <p>${single.description}</p>
        <a href="#" title "${single.title}">Read more</a>
    `
    newsContainer.appendChild(singlePost)
})
/* /Funciones -News generation*/