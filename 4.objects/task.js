function Student(name, gender, age) {
  	this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
};

Student.prototype.setSubject = function (subjectName) {
 	this.subject = subjectName
}

Student.prototype.addMarks = function (...marksToAdd) {
	if (!this.hasOwnProperty('marks')) {
		return 0
	};

	this.marks.push(...marksToAdd)
}

Student.prototype.getAverage = function () {
  	if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
		return 0
	};

	return this.marks.reduce((acc, value) => acc + value) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

// let student1 = new Student("Василиса", "женский", 19);
// let student2 = new Student("Артём", "мужской", 25);	