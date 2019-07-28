

SetPorfolioElements();
function SetPorfolioElements() {

    var portfolioElement = document.getElementById("portfolio-element");
    var portfolioParent = portfolioElement.parentElement;
    portfolioParent.removeChild(portfolioElement);//remove template element to start clean

    ProjectRankings.forEach(projectDetail => {
        CreatePortfolioElement(portfolioElement, projectDetail, portfolioParent)
    });
}

function CreatePortfolioElement(elementTemplate, projectDetail, parentElement) {

    var portfolioElement = elementTemplate.cloneNode(true);
    console.log(projectDetail.ImageName);

    var projectName = getFirstElementByClassName(portfolioElement, "project-name");
    projectName.innerHTML = projectDetail.ProjectName;

    var projectCategory = getFirstElementByClassName(portfolioElement, "project-category");
    projectCategory.innerHTML = projectDetail.Category;

    var projectFullImage = getFirstElementByClassName(portfolioElement, "portfolio-box");
    projectFullImage.setAttribute("href", "img/portfolio/fullsize/" + projectDetail.ImageName);

    var projectThumbnailImage = getFirstElementByClassName(portfolioElement, "img-fluid");
    projectThumbnailImage.setAttribute("src", "img/portfolio/thumbnails/" + projectDetail.ImageName);

    parentElement.appendChild(portfolioElement);
}

function getFirstElementByClassName(element, className) {
    return element.getElementsByClassName(className)[0];
}