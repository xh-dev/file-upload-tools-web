import React from 'react';

function Uploader() {
  return (
    <div className="Uploader">
        <form method='POST' action='http://localhost:8080/api/upload'encType='multipart/form-data'>
            <input type='hidden' name='code' value='1234' ></input>
            <br/>
            <input type='file' name='file'/>
            <br/>
            <button type='submit' >Submit</button>
        </form>
    </div>
  );
}

export default Uploader;
