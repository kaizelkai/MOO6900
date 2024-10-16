document.getElementById('clickableImage').addEventListener('click', function() {
    // Cacher la section load
    document.querySelector('.load').style.display = 'none';

    // Afficher toutes les sections princ
    const princSections = document.querySelectorAll('.princ');
    princSections.forEach(section => {
        section.style.display = 'flex'; // Affiche chaque section princ
    });
});
