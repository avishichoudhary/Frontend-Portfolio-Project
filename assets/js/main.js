const faqItems = document.querySelectorAll('.faq-item');

// Function to show and hide elements

 function toggleItem(e){
    const tabContentItems = document.querySelector(`#${this.id}-tab`);
    const tabx = document.querySelector(`#${this.id}-x`);
    const tabxx = document.querySelector(`#${this.id}-xx`);
    tabContentItems.classList.toggle('hide');
    tabx.classList.toggle('hide');
    tabxx.classList.toggle('hide');
}


// Listen for tab click
faqItems.forEach(item => item.addEventListener('click', toggleItem));

