function resetFields() {
    const inputs = document.querySelectorAll('.todo_value');
    const checkboxes = document.querySelectorAll('.todo_checkbox');
    inputs.forEach(input => input.value = '');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    checkboxes.forEach(checkbox => {
        const todoValue = checkbox.previousElementSibling;
        todoValue.style.textDecoration = 'none';
        todoValue.style.color = 'black';
    });
}
