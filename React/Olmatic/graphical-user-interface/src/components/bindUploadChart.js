import React, { Component} from 'react';


class UploadReplicate1 extends Component{
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
    }
    // onFileChange(event){
    //     this.props.onChange(event.target.files[0].name)
    // }
    onFileChange(event) {
        var dataPoints =[]
        const file = event.target.files[0];
        const fname = event.target.files[0].name
        const reader = new FileReader();
        reader.onload = (evt) => {
        /* Parse data */
        const bstr = evt.target.result;
        const dataStringLines = bstr.split(/\r\n|\n/);
        console.log(dataStringLines)
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        const data = dataStringLines.slice(1,)
        for(var i = 0; i < data.length; i++){
            const datatemp = data[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (datatemp[0] != "" && datatemp[1] !== ""){
                dataPoints.push({x: new Date((datatemp[0]).replace(/-/g,"/")), y: Number(datatemp[1])});
            }
        }
        var x = {dataPoints : dataPoints, type: "stock", name: fname}
        this.props.onChange(x)
        };
        reader.readAsBinaryString(file);
    };

    render (){

        return(
            <div>
                <button class="navbar-toggler rt" type="button" title="Upload"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
                <i class="fas fa-upload upload"></i>
                <input class="single" type="file" accept=".csv,.xlsx,.xls" name="multi_myfile" onChange={this.onFileChange.bind(this)}/>
              </button>
            </div> 
        )
    };
}
export default UploadReplicate1;