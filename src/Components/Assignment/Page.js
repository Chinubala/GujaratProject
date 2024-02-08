import React, { useEffect, useState } from "react";
import data from "../Job.json";
import "./Page.css";

function Page() {
    const [dataToshow, setDataToShow] = useState([]);

	useEffect(() => {
		let datatoCheck = [...data];
		let record = [];
		datatoCheck.forEach((element) => {
			if (element[0].installationAddress.suburb === "Adelaide") {
				record.push(element);
			}
		});
		setDataToShow([...record[0]]);
	}, [data]);

	console.log("hiii9090", dataToshow[0]);

     const getCalculateValue=(amount)=>{
        console.log(amount);
        let panel = amount.panelDetail.panelInfo.panelPower;
        let Quantity = amount.panelDetail.panelInfo.Quantity;
        let Wattage = panel * Quantity
return Wattage

     }

    return (
        <>
            <section className="contactus">
                <div className="container">
                    <div className="border border-danger mt-5 p-5">
                        <h1 className="text-warning">FIELDS</h1>
                        <form>

                            <div class="form-group row mb-3">
                                <label for="staticEmail" class="col-sm-4 col-form-label">Full Name :</label>
                                <div class="col-sm-8">
                                    <input type="text"  class="form-control"  value={`${dataToshow[0].customerDetails.firstName} ${dataToshow[0].customerDetails.lastName}`} />
                                </div>
                            </div>

                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Installation Address :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={`${dataToshow[0].installationAddress.streetName} ${dataToshow[0].installationAddress.streetType} ${dataToshow[0].installationAddress.suburb} ${dataToshow[0].installationAddress.postCode}`}  />
                                </div>
                            </div>

                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Is Customer Registered for GST: Yes/No :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={dataToshow[0].customerDetails.isGST} />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Inverter Series Number :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={dataToshow[0].inverterDetail.inverterInfo.inverterSeries} />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Amount of Batteries : </label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={dataToshow[0].batteryDetail.batteryInfo.Quantity}  />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Total Wattage :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control"  value={getCalculateValue(dataToshow[0])}/>
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Designer Name :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={dataToshow[0].designerName} />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Type of System Owner :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={dataToshow[0].systemOwnerType} />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Battery Warranty Description :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={dataToshow[0].batteryDetail.batteryInfo.batteryWarrantyDetails.warrantyDescription} />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">- Type of storey is the house of installation :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value={dataToshow[0].additionalDetails.Story}  />
                                </div>
                            </div>
                          

                        </form>
                    </div>
                </div>
            </section>



        </>
    )
}
export default Page