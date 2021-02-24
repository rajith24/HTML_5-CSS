import React, { Component} from 'react';


class MultiUpload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            finishedRead : false
        }
        this.onMultiChange = this.onMultiChange.bind(this);
    }
    // onFileChange(event){
    //     this.props.onChange(event.target.files[0].name)
    // }
    onMultiChange(event) {
        var dataPointset =[]
        const files = event.target.files;
        // const fname = event.target.files[0].name
        for(var j=0; j<files.length ; j++)
        {
            console.log("couse",j)
            const reader = new FileReader();
            reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const dataStringLines = bstr.split(/\r\n|\n/);
            // console.log(dataStringLines)
            const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            const data = dataStringLines.slice(1,)
            var dataPoints =[]
            for(var i = 0; i < data.length; i++){
                const datatemp = data[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
                if (datatemp[0] != "" && datatemp[1] !== ""){
                    dataPoints.push({x: new Date((datatemp[0]).replace(/-/g,"/")), y: Number(datatemp[1])});
                }
            }
            var x = {dataPoints : dataPoints, type: "compare"}
            dataPointset.push(x);
            console.log("check!",j)
            if(j==files.length){
                console.log(dataPointset)
                this.setState(state => ({finishedRead : true}));  
            }
            if(this.state.finishedRead == true){
                console.log(dataPointset)
                this.props.onChange(dataPointset)
            }
            };
            reader.readAsBinaryString(files[j]);
        }
        
        console.log(event)
    };

    render (){

        return(
            <div >
            <input class="multiple" type="file" name="myfile"  accept=".csv,.xlsx,.xls" multiple onChange={this.onMultiChange.bind(this)}/>
          </div>
        )
    };
}
export default MultiUpload;