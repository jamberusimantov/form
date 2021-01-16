let inputAttArr: any[] = [];
inputAttArr.push(['firstNameInput', 'FIRST NAME', 'text']);
inputAttArr.push(['lastNameInput', 'LAST NAME', 'text']);
inputAttArr.push(['emailInput', 'EMAIL ADRESS', 'email']);
inputAttArr.push(['imgInput', 'PROFILE PIC', 'file']);
inputAttArr.push(['telInput', 'PHONE NUMBER', 'tel']);
inputAttArr.push(['usernameInput', 'USERNAME', 'text']);
inputAttArr.push(['passwordInput', 'PASSWORD', 'password']);
inputAttArr.push(['signUpBtn', 'sign Up', 'submit']);
inputAttArr.push(['resetBtn', 'reset', 'reset']);
document.getElementById('body').innerHTML += "<form id='form' onsubmit='return validate()'></form>";
inputAttArr.forEach(printInput);
function printInput(arr: string[]): void {
    document.getElementById('form').innerHTML += (arr[0] == 'signUpBtn' || arr[0] == 'resetBtn') ? `<button id='${arr[0]}' type="${arr[2]}">${arr[1]}</button>` : `<label class='label' for='${arr[0]}'>${arr[1]}:<span class='alert' id='${arr[0]}Alert'></span></label><input class='input' name='${arr[0]}' id='${arr[0]}' type='${arr[2]}'>`;
}
function validate(): boolean {
    let fName: string = (<HTMLInputElement>document.getElementById(inputAttArr[0][0])).value.trim();
    let lName: string = (<HTMLInputElement>document.getElementById(inputAttArr[1][0])).value.trim();
    let email: string = (<HTMLInputElement>document.getElementById(inputAttArr[2][0])).value.trim();
    let photo: string = (<HTMLInputElement>document.getElementById(inputAttArr[3][0])).value.trim();
    let phone: string = (<HTMLInputElement>document.getElementById(inputAttArr[4][0])).value.trim();
    let username: string = (<HTMLInputElement>document.getElementById(inputAttArr[5][0])).value.trim();
    let password: string = (<HTMLInputElement>document.getElementById(inputAttArr[6][0])).value.trim();
    let values: string[] = [fName, lName, email, photo, phone, username, password];
    let fail: number = values.indexOf('');
    if (fail != -1) {
        for (let i = 0; i < fail; i++) {
            document.getElementById(`${inputAttArr[i][0]}Alert`).innerText = '';
        }
        document.getElementById(`${inputAttArr[fail][0]}Alert`).innerText = '*required'
        return false;
    }
    return true;
}