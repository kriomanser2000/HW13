const attendanceData = {};
function submitAttendance() 
{
    const group = document.getElementById('group').value;
    const lecture = document.getElementById('lecture').value;
    const topic = document.getElementById('topic').value;
    const attendedStudents = [];
    const checkboxes = document.querySelectorAll('input[name="attendance"]:checked');
    checkboxes.forEach((checkbox) => 
    {
        attendedStudents.push(checkbox.value);
    });
    if (!attendanceData[group]) 
    {
        attendanceData[group] = {};
    }
    if (!attendanceData[group][lecture]) 
    {
        attendanceData[group][lecture] = [];
    }
    attendanceData[group][lecture].push
    ({
        topic: topic,
        attendedStudents: attendedStudents
    });
    updateAttendanceList();
}
function updateAttendanceList() 
{
    const group = document.getElementById('group').value;
    const lecture = document.getElementById('lecture').value;
    const attendanceList = document.getElementById('attendanceList');
    attendanceList.innerHTML = '';
    if (attendanceData[group] && attendanceData[group][lecture]) 
    {
        attendanceData[group][lecture].forEach((attendance) => 
        {
            const listItem = document.createElement('li');
            listItem.textContent = `Theme: ${attendance.topic}, Attended: ${attendance.attendedStudents.join(', ')}`;
            attendanceList.appendChild(listItem);
        });
    }
}