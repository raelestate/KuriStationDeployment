const addLink = document.querySelector('#add');
const notifLink = document.querySelector('#notif');
const accLink = document.querySelector('#account');
const search = document.querySelector('#search');

const collapseSection1 = document.querySelector('#collapseSection1');
const collapseSection2 = document.querySelector('#collapseSection2');
const collapseSection3 = document.querySelector('#collapseSection3');
const collapseSection4 = document.querySelector('#collapseSection4');

function hideSections() {
    collapseSection1.classList.remove('show');
    collapseSection2.classList.remove('show');
    collapseSection3.classList.remove('show');
    collapseSection4.classList.remove('show');
}

search.addEventListener('click', function (e) {
    e.preventDefault();

    if (collapseSection4.classList.contains('show')) {
        collapseSection4.classList.remove('show');
    } else {
        hideSections();
        collapseSection4.classList.add('show');
    }

    // Toggle the active class for search only
    search.querySelector('i').classList.toggle('head-search-active');
    scrollToSection(collapseSection4);
});

accLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (collapseSection3.classList.contains('show')) {
        collapseSection3.classList.remove('show');
    } else {
        hideSections();
        collapseSection3.classList.add('show');
    }

    scrollToSection(collapseSection3);
});

addLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (collapseSection1.classList.contains('show')) {
        collapseSection1.classList.remove('show');
    } else {
        hideSections();
        collapseSection1.classList.add('show');
    }

    // Toggle the active class for add only
    addLink.querySelector('i').classList.toggle('head-add-active');
    scrollToSection(collapseSection1);
});

notifLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (collapseSection2.classList.contains('show')) {
        collapseSection2.classList.remove('show');
    } else {
        hideSections();
        collapseSection2.classList.add('show');
    }

    // Toggle the active class for notification only
    notifLink.querySelector('i').classList.toggle('head-bell-active');
    scrollToSection(collapseSection2);
});

function scrollToSection(section) {
    let offset = parseFloat(getComputedStyle(document.body).marginTop);
    window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
    });
}

    
    ///This displays the Photo uploaded HEKHOKK --- For the Posting and Listing
    document.getElementById('photo-input').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
            const uploadedImage = document.getElementById('uploaded-image');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
            document.querySelector('.upload-text').textContent = 'Change Image';
        };
        reader.readAsDataURL(file);
        }
    });

    function goBack() {
        window.history.back();
    }
