document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const detailsPage = project.getAttribute('data-details');
            window.open(detailsPage, '_blank');
        });
    });
});
function toggleCertificateDetails(certificate, detailsId) {
    var details = document.getElementById(detailsId);
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
