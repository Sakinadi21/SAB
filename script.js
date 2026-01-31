// Show Course Detail Modal
function showCourseDetail(courseId) {
    const modal = document.getElementById('courseModal');
    const allDetails = document.querySelectorAll('.course-detail-content');
    
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    const targetDetail = document.getElementById('courseDetail-' + courseId);
    if (targetDetail) {
        targetDetail.style.display = 'block';
    }
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close Course Detail Modal
function closeCourseDetail() {
    const modal = document.getElementById('courseModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target === modal) {
        closeCourseDetail();
    }
});

// Handle enrollment button
function enrollCourse() {
    alert('https://sabasedu.com/course/gstalpha26/enroll । আমাদের সাথে যুক্ত হওয়ার জন্য ধন্যবাদ।');
}

// Handle download button
function downloadContent() {
    alert('কন্টেন্ট আপনাকে পাঠানো হবে!');
}
