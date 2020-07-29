import React from 'react';
import "./Search.scss";


const Search = (props) => {

    let {showFilter, onFilter, onFilterDate,  onSearch} = props;

    return (
        <div className="container text-center mt-3">

            <div className="input-group search">
                <div className="input-group-prepend">
                    <span className="input-group-text border-0 bg-transparent" id="basic-addon1"> <i className="fa fa-search" aria-hidden="true"></i> </span>
                </div>
                <input placeholder="Search for a category" className="form-control" onChange={onSearch} type="text" />

            </div>
                {     showFilter ?
                            <div> 
                                <h6 className="alert">Filter Search by:</h6> 
                                <div className="d-flex flex-wrap justify-content-center">
                                    <small className="alert">Date: 
                                    <input type="date" className="form-control"  onChange={onFilterDate} />
                                    </small> 
                                    <small className="alert"> <i className="fa fa-vote-yea"></i>  <input type="text" className="form-control"   onInput={onFilter} placeholder="Number of upvotes" required pattern="[0-9]"  />  </small>
                                </div>
                            </div>
                            :

                            null
                }
          
            
        </div>
    )
}

export default Search
