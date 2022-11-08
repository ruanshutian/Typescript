function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
    });
}
var result = {
    data: [
        { id: 1, name: "A", sex: "male" },
        { id: 2, name: "B" }
    ]
};
render(result);
