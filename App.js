import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {MultipleSelectPicker} from 'react-native-multi-select-picker';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

const App = () => {
  // async function createPDF() {
  //   let options = {
  //     html: `<h1>PDF TEST</h1> <h4>${caseNo}<h4/>`,
  //     fileName: 'fieldvisit',
  //     directory: 'Documents',
  //   };

  //   let file = await RNHTMLtoPDF.convert(options);
  //   // console.log(file.filePath);
  //   alert(file.filePath);
  // }

  async function printPDF() {
    const results = await RNHTMLtoPDF.convert({
      html: `<h1>Custom converted PDF Document</h1>`,
      fileName: 'test',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath});
  }

  const [caseNo, setCaseNo] = useState('');
  const [visitBy, setVisitBy] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [givenBy, setGivenBy] = useState('');
  const [bankName, setBankName] = useState('');
  const [branch, setBranch] = useState('');
  const [surveyinpresenceof, setSurveyinpresenceof] = useState('');
  const [applicationName, setApplicationName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [purchaserowner, setPurchaserowner] = useState('');
  const [applicantAddress, setApplicantAddress] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [nameofthesociety, setNameofthesociety] = useState('');
  const [societyRegnNo, setSocietyRegnNo] = useState('');
  const [nearestStation, setNearestStation] = useState('');
  const [presentlyOccupied, setPresentlyOccupied] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [landmark, setLandmark] = useState('');
  const [municipalWard, setMunicipalWard] = useState('');
  const [sNo, setSNo] = useState('');
  const [areaOfPlot, setAreaOfPlot] = useState('');
  const [villageName, setVillageName] = useState('');
  const [flatE, setFlatE] = useState('');
  const [flatW, setFlatW] = useState('');
  const [flatN, setFlatN] = useState('');
  const [flatS, setFlatS] = useState('');
  const [buildingE, setBuildingE] = useState('');
  const [buildingW, setBuildingW] = useState('');
  const [buildingN, setBuildingN] = useState('');
  const [buildingS, setBuildingS] = useState('');
  const [typeOfLand, setTypeOfLand] = useState('');
  const [tenture, setTenture] = useState('');
  const [typeLocality, setTypeLocality] = useState('');
  const [typeClassification, setTypeClassification] = useState('');
  const [typeOfProperty, setTypeOfProperty] = useState('');
  const [flatHall, setFlatHall] = useState('');
  const [flatKitchen, setFlatKitchen] = useState('');
  const [flatBedroom, setFlatBedroom] = useState('');
  const [flatDinning, setFlatDinning] = useState('');
  const [flatBath, setFlatBath] = useState('');
  const [flatWC, setFlatWC] = useState('');
  const [flatAttachedWCAndBath, setFlatAttachedWCAndBath] = useState('');
  const [flatBalcony, setFlatBalcony] = useState('');
  const [flatFB, setFlatFB] = useState('');
  const [flatDB, setFlatDB] = useState('');
  const [flatTerrace, setFlatTerrace] = useState('');
  const [flooring, setFlooring] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [windows, setWindows] = useState('');
  const [doors, setDoors] = useState('');
  const [wC, setWC] = useState('');
  const [bath, setBath] = useState('');
  const [paint, setPaint] = useState('');
  const [pOP, setPOP] = useState('');
  const [exteriorPaint, setExteriorPaint] = useState('');
  const [garden, setGarden] = useState('');
  const [typeOfStructure, setTypeOfStructure] = useState('');
  const [basement, setBasement] = useState('');
  const [g, setG] = useState('');
  const [podium, setPodium] = useState('');
  const [stilt, setStilt] = useState('');
  const [partStilt, setPartStilt] = useState('');
  const [upperFloors, setUpperFloors] = useState('');
  const [noOfLift, setNoOfLift] = useState('');
  const [noOfFlatsPerFloors, setNoOfFlatsPerFloors] = useState('');
  const [noOfShopsFlats, setNoOfShopsFlats] = useState('');
  const [construction, setConstruction] = useState('');
  const [uC, setUC] = useState('');
  const [slabWork, setSlabWork] = useState('');
  const [brickWork, setBrickWork] = useState('');
  const [age, setAge] = useState('');
  const [residueLife, setResidueLife] = useState('');
  const [typeOfBld, setTypeOfBld] = useState('');
  const [pavingAroundBld, setPavingAroundBld] = useState('');
  const [plot, setPlot] = useState('');
  const [widthOfRoad, setWidthOfRoad] = useState('');
  const [typeOfRoad, setTypeOfRoad] = useState('');
  const [lockedLand, setLockedLand] = useState('');
  const [shapeOfLand, setShapeOfLand] = useState('');
  const [carParking, setCarParking] = useState('');
  const [maintainanceOfBld, setMaintainanceOfBld] = useState('');
  const [qualityOfConstruction, setQualityOfConstruction] = useState('');
  const [classs, setClasss] = useState('');
  const [sepereatedCompound, setSepereatedCompound] = useState('');
  const [natureOfBoundary, setNatureOfBoundary] = useState('');
  const [waterAvailability, setWaterAvailability] = useState('');
  const [agreementDate, setAgreementDate] = useState('');
  const [agreementPurchasePrice, setAgreementPurchasePrice] = useState('');
  const [marketTrend, setMarketTrend] = useState('');
  const [aCarpet, setACarpet] = useState('');
  const [aBuiltUp, setABuiltUp] = useState('');
  const [aSaleable, setASaleable] = useState('');
  const [mCarpet, setMCarpet] = useState('');
  const [mBuiltUp, setMBuiltUp] = useState('');
  const [mSaleable, setMSaleable] = useState('');
  const [balcony, setBalcony] = useState('');
  const [otla, setOtla] = useState('');
  const [valuationMethod, setValuationMethod] = useState('');
  const [cFMVArea, setCFMVArea] = useState('');
  const [cFMVRate, setCFMVRate] = useState('');
  const [cFMVTotal, setCFMVTotal] = useState('');
  const [insurance, setInsurance] = useState('');

  const [mHallL, setMHallL] = useState('');
  const [mHallPtL, setMHallPtL] = useState('');
  const [mKitchenL, setMKitchenL] = useState('');
  const [mKitchenPtL, setMKitchenPtL] = useState('');
  const [mBed1L, setMBed1L] = useState('');
  const [mBed1PtL, setMBed1PtL] = useState('');
  const [mBed2L, setMBed2L] = useState('');
  const [mBed2PtL, setMBed2PtL] = useState('');
  const [mBed3L, setMBed3L] = useState('');
  const [mBed3PtL, setMBed3PtL] = useState('');
  const [mBed4L, setMBed4L] = useState('');
  const [mBed4PtL, setMBed4PtL] = useState('');
  const [mPassageL, setMPassageL] = useState('');
  const [mWC1L, setMWC1L] = useState('');
  const [mBath1L, setMBath1L] = useState('');
  const [mWAndBL, setMWAndBL] = useState('');

  const [mHallB, setMHallB] = useState('');
  const [mHallPtB, setMHallPtB] = useState('');
  const [mKitchenB, setMKitchenB] = useState('');
  const [mKitchenPtB, setMKitchenPtB] = useState('');
  const [mBed1B, setMBed1B] = useState('');
  const [mBed1PtB, setMBed1PtB] = useState('');
  const [mBed2B, setMBed2B] = useState('');
  const [mBed2PtB, setMBed2PtB] = useState('');
  const [mBed3B, setMBed3B] = useState('');
  const [mBed3PtB, setMBed3PtB] = useState('');
  const [mBed4B, setMBed4B] = useState('');
  const [mBed4PtB, setMBed4PtB] = useState('');
  const [mPassageB, setMPassageB] = useState('');
  const [mWC1B, setMWC1B] = useState('');
  const [mBath1B, setMBath1B] = useState('');
  const [mWAndBB, setMWAndBB] = useState('');

  const [mHallT, setMHallT] = useState('');
  const [mHallPtT, setMHallPtT] = useState('');
  const [mKitchenT, setMKitchenT] = useState('');
  const [mKitchenPtT, setMKitchenPtT] = useState('');
  const [mBed1T, setMBed1T] = useState('');
  const [mBed1PtT, setMBed1PtT] = useState('');
  const [mBed2T, setMBed2T] = useState('');
  const [mBed2PtT, setMBed2PtT] = useState('');
  const [mBed3T, setMBed3T] = useState('');
  const [mBed3PtT, setMBed3PtT] = useState('');
  const [mBed4T, setMBed4T] = useState('');
  const [mBed4PtT, setMBed4PtT] = useState('');
  const [mPassageT, setMPassageT] = useState('');
  const [mWC1T, setMWC1T] = useState('');
  const [mBath1T, setMBath1T] = useState('');
  const [mWAndBT, setMWAndBT] = useState('');

  return (
    <ScrollView
      backgroundColor="#282828"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic">
      <Image style={styles.logo} source={require('./logo.png')} />
      <Text style={styles.title}>Field Visit Form</Text>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Case No.: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Case Number"
            placeholderTextColor="#c1c1c1"
            value={caseNo}
            onChangeText={caseNo => setCaseNo(caseNo)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Visit By: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Visiter Name"
            placeholderTextColor="#c1c1c1"
            value={visitBy}
            onChangeText={visitBy => setVisitBy(visitBy)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Visit Date: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Visit Date"
            placeholderTextColor="#c1c1c1"
            value={visitDate}
            onChangeText={visitDate => setVisitDate(visitDate)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Given By: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Given By"
            placeholderTextColor="#c1c1c1"
            value={givenBy}
            onChangeText={givenBy => setGivenBy(givenBy)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bank Name: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Bank Name"
            placeholderTextColor="#c1c1c1"
            value={bankName}
            onChangeText={bankName => setBankName(bankName)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bank Branch: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Bank Branch"
            placeholderTextColor="#c1c1c1"
            value={branch}
            onChangeText={branch => setBranch(branch)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Survey in Presence of: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Name"
            placeholderTextColor="#c1c1c1"
            value={surveyinpresenceof}
            onChangeText={surveyinpresenceof =>
              setSurveyinpresenceof(surveyinpresenceof)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Application Name: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Name"
            placeholderTextColor="#c1c1c1"
            value={applicationName}
            onChangeText={applicationName =>
              setApplicationName(applicationName)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Contact No.: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Contact Number"
            placeholderTextColor="#c1c1c1"
            value={contactNumber}
            onChangeText={contactNumber => setContactNumber(contactNumber)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Name of the Purchaser/Owner: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Name"
            placeholderTextColor="#c1c1c1"
            value={purchaserowner}
            onChangeText={purchaserowner => setPurchaserowner(purchaserowner)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Applicant Address: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Address"
            placeholderTextColor="#c1c1c1"
            value={applicantAddress}
            onChangeText={applicantAddress =>
              setApplicantAddress(applicantAddress)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Property Address: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Address"
            placeholderTextColor="#c1c1c1"
            value={propertyAddress}
            onChangeText={propertyAddress =>
              setPropertyAddress(propertyAddress)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Name of the Society: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Name"
            placeholderTextColor="#c1c1c1"
            value={nameofthesociety}
            onChangeText={nameofthesociety =>
              setNameofthesociety(nameofthesociety)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Society Regn. No.: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter No."
            placeholderTextColor="#c1c1c1"
            value={societyRegnNo}
            onChangeText={societyRegnNo => setSocietyRegnNo(societyRegnNo)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Nearest Station & Distance: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={nearestStation}
            onChangeText={nearestStation => setNearestStation(nearestStation)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Presently Occupied: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={presentlyOccupied}
            onValueChange={(itemValue, itemIndex) =>
              setPresentlyOccupied(itemValue)
            }>
            <Picker.Item label="Select Ownership" />
            <Picker.Item label="Owner" value="Owner" />
            <Picker.Item label="Seller" value="Seller" />
            <Picker.Item label="Builder" value="Builder" />
            <Picker.Item
              label="Tenated to a third party"
              value="Tenated to a third party"
            />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Tenant Name: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Name"
            placeholderTextColor="#c1c1c1"
            value={tenantName}
            onChangeText={tenantName => setTenantName(tenantName)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Monthly Rent: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={monthlyRent}
            onChangeText={monthlyRent => setMonthlyRent(monthlyRent)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Landmark: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Landmark"
            placeholderTextColor="#c1c1c1"
            value={landmark}
            onChangeText={landmark => setLandmark(landmark)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Municipal Ward: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={municipalWard}
            onChangeText={municipalWard => setMunicipalWard(municipalWard)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>S.No./Plot/CTS No.: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={sNo}
            onChangeText={sNo => setSNo(sNo)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Area of Plot: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter in Sq. mt."
            placeholderTextColor="#c1c1c1"
            value={areaOfPlot}
            onChangeText={areaOfPlot => setAreaOfPlot(areaOfPlot)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Village Name: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Village Name"
            placeholderTextColor="#c1c1c1"
            value={villageName}
            onChangeText={villageName => setVillageName(villageName)}
          />
        </View>

        <Text style={styles.texthead0}>Bounded by (For Flat): </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>East: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatE}
            onChangeText={flatE => setFlatE(flatE)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>West: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatW}
            onChangeText={flatW => setFlatW(flatW)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>North: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatN}
            onChangeText={flatN => setFlatN(flatN)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>South: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatS}
            onChangeText={flatS => setFlatS(flatS)}
          />
        </View>

        <Text style={styles.texthead0}>Bounded by (For Building): </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>East: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={buildingE}
            onChangeText={buildingE => setBuildingE(buildingE)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>West: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={buildingW}
            onChangeText={buildingW => setBuildingW(buildingW)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>North: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={buildingN}
            onChangeText={buildingN => setBuildingN(buildingN)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>South: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={buildingS}
            onChangeText={buildingS => setBuildingS(buildingS)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Type of Land: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={typeOfLand}
            onValueChange={(itemValue, itemIndex) => setTypeOfLand(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="N.A." value="N.A." />
            <Picker.Item label="Agri." value="Agri." />
            <Picker.Item label="Gaothan" value="Gaothan" />
            <Picker.Item label="Solid" value="Solid" />
            <Picker.Item label="Rocky" value="Rocky" />
            <Picker.Item label="Marsh" value="Marsh" />
            <Picker.Item label="Reclaimed" value="Reclaimed" />
            <Picker.Item label="Water-Logged" value="Water-Logged" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Tenure: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={tenture}
            onChangeText={tenture => setTenture(tenture)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Type Locality: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={typeLocality}
            onValueChange={(itemValue, itemIndex) =>
              setTypeLocality(itemValue)
            }>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Residential" value="Residential" />
            <Picker.Item label="Resi. Cum Comm." value="Resi. Cum Comm." />
            <Picker.Item label="Comm." value="Comm." />
            <Picker.Item label="Indus." value="Indus." />
            <Picker.Item label="Agri." value="Agri." />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Type Classification: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={typeClassification}
            onValueChange={(itemValue, itemIndex) =>
              setTypeClassification(itemValue)
            }>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Urban" value="Urban" />
            <Picker.Item label="Semi Urban" value="Semi Urban" />
            <Picker.Item label="Rural" value="Rural" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Type of Property: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={typeOfProperty}
            onValueChange={(itemValue, itemIndex) =>
              setTypeOfProperty(itemValue)
            }>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Flat" value="Flat" />
            <Picker.Item label="Shop" value="Shop" />
            <Picker.Item label="Gala" value="Gala" />
            <Picker.Item label="Office" value="Office" />
            <Picker.Item label="Land" value="Land" />
            <Picker.Item label="Bldg." value="Bldg." />
            <Picker.Item label="House" value="House" />
            <Picker.Item label="Bunglow" value="Bunglow" />
            <Picker.Item label="P and M" value="P and M" />
          </Picker>
        </View>

        {/* Flat Details */}
        <Text style={styles.texthead0}>Flat Details: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Hall: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatHall}
            onChangeText={flatHall => setFlatHall(flatHall)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatKitchen}
            onChangeText={flatKitchen => setFlatKitchen(flatKitchen)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bedroom: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatBedroom}
            onChangeText={flatBedroom => setFlatBedroom(flatBedroom)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Dinning: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatDinning}
            onChangeText={flatDinning => setFlatDinning(flatDinning)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bath: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatBath}
            onChangeText={flatBath => setFlatBath(flatBath)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>WC: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatWC}
            onChangeText={flatWC => setFlatWC(flatWC)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Attached WC and Bathroom: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatAttachedWCAndBath}
            onChangeText={flatAttachedWCAndBath =>
              setFlatAttachedWCAndBath(flatAttachedWCAndBath)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Balcony: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatBalcony}
            onChangeText={flatBalcony => setFlatBalcony(flatBalcony)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>F/B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatFB}
            onChangeText={flatFB => setFlatFB(flatFB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>D/B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatDB}
            onChangeText={flatDB => setFlatDB(flatDB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Terrace: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={flatTerrace}
            onChangeText={flatTerrace => setFlatTerrace(flatTerrace)}
          />
        </View>

        {/* Interiors */}

        <Text style={styles.texthead0}>Interiors: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Flooring: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={flooring}
            onValueChange={(itemValue, itemIndex) => setFlooring(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Kotah" value="Kotah" />
            <Picker.Item label="Mosaic" value="Mosaic" />
            <Picker.Item label="Spartek" value="Spartek" />
            <Picker.Item label="Ceramic" value="Ceramic" />
            <Picker.Item label="Vitrified" value="Vitrified" />
            <Picker.Item label="Marble" value="Marble" />
            <Picker.Item label="Marbonite" value="Marbonite" />
            <Picker.Item label="Italion" value="Italion" />
            <Picker.Item label="Cement Concrete" value="Cement Concrete" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={kitchen}
            onValueChange={(itemValue, itemIndex) => setKitchen(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="U" value="U" />
            <Picker.Item label="L-Shaped" value="L-Shaped" />
            <Picker.Item label="Granite" value="Granite" />
            <Picker.Item label="Green Marble" value="Green Marble" />
            <Picker.Item label="White Marble" value="White Marble" />
            <Picker.Item label="Modular Kitchen" value="Modular Kitchen" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Windows: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={windows}
            onValueChange={(itemValue, itemIndex) => setWindows(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="A.S. Windows" value="A.S. Windows" />
            <Picker.Item label="P.C.A.S.W." value="P.C.A.S.W." />
            <Picker.Item label="Wooden Hinged" value="Wooden Hinged" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Doors: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={doors}
            onValueChange={(itemValue, itemIndex) => setDoors(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Plywood" value="Plywood" />
            <Picker.Item label="Wooden" value="Wooden" />
            <Picker.Item label="Bakelite" value="Bakelite" />
            <Picker.Item label="Teakwood" value="Teakwood" />
            <Picker.Item label="Glass" value="Glass" />
            <Picker.Item
              label="M.S. Rolling Shutter"
              value="M.S. Rolling Shutter"
            />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>W.C.: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={wC}
            onValueChange={(itemValue, itemIndex) => setWC(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Indian" value="Indian" />
            <Picker.Item label="European" value="European" />
            <Picker.Item label="Anglo Indian" value="Anglo Indian" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bath: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={bath}
            onValueChange={(itemValue, itemIndex) => setBath(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Spartek" value="Spartek" />
            <Picker.Item label="Vitrified" value="Vitrified" />
            <Picker.Item label="Kotah" value="Kotah" />
            <Picker.Item label="Ceramic" value="Ceramic" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Paint: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={paint}
            onValueChange={(itemValue, itemIndex) => setPaint(itemValue)}>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Acrylic" value="Acrylic" />
            <Picker.Item label="Distemper" value="Distemper" />
            <Picker.Item label="Cement" value="Cement" />
            <Picker.Item label="Whitewash" value="Whitewash" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>POP: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={pOP}
            onValueChange={(itemValue, itemIndex) => setPOP(itemValue)}>
            <Picker.Item label="Select" />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
        </View>

        {/* Exterior Paint  */}

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Exterior Paint: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={exteriorPaint}
            onValueChange={(itemValue, itemIndex) =>
              setExteriorPaint(itemValue)
            }>
            <Picker.Item label="Select Type" />
            <Picker.Item label="Cement" value="Cement" />
            <Picker.Item label="Acrylic" value="Acrylic" />
          </Picker>
        </View>

        {/* Garden  */}

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Garden: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={garden}
            onValueChange={(itemValue, itemIndex) => setGarden(itemValue)}>
            <Picker.Item label="Select " />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
        </View>

        {/* Type of Structure  */}

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Type Of Structure: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={typeOfStructure}
            onValueChange={(itemValue, itemIndex) =>
              setTypeOfStructure(itemValue)
            }>
            <Picker.Item label="Select Type" />
            <Picker.Item label="RCC + Brickwall" value="RCC + Brickwall" />
            <Picker.Item label="Blockwall" value="Blockwall" />
            <Picker.Item label="Load Bearing" value="Load Bearing" />
            <Picker.Item label="MS sheet" value="MS sheet" />
            <Picker.Item label="AC Sheet roofing" value="AC Sheet roofing" />
            <Picker.Item label="Mangalore Tiles" value="Mangalore Tiles" />
          </Picker>
        </View>

        {/* No. of Floors */}
        <Text style={styles.texthead0}>No. of Floors: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Basement: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={basement}
            onChangeText={basement => setBasement(basement)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Ground: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={g}
            onChangeText={g => setG(g)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Podium: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={podium}
            onChangeText={podium => setPodium(podium)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Stilt: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={stilt}
            onChangeText={stilt => setStilt(stilt)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Part Stilt: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={partStilt}
            onChangeText={partStilt => setPartStilt(partStilt)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Part/Upper Floors: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={upperFloors}
            onChangeText={upperFloors => setUpperFloors(upperFloors)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>No. of Lift in Bldg.: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={noOfLift}
            onChangeText={noOfLift => setNoOfLift(noOfLift)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>No. of Flats per floor: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={noOfFlatsPerFloors}
            onChangeText={noOfFlatsPerFloors =>
              setNoOfFlatsPerFloors(noOfFlatsPerFloors)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>No. of Shops & Flats in Bldg.: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={noOfShopsFlats}
            onChangeText={noOfShopsFlats => setNoOfShopsFlats(noOfShopsFlats)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Constriction: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={construction}
            onValueChange={(itemValue, itemIndex) =>
              setConstruction(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item label="Complete" value="Complete" />
            <Picker.Item
              label="Under Construction"
              value="Under Construction"
            />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>If U/C: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={uC}
            onChangeText={uC => setUC(uC)}
          />
        </View>

        <Text style={styles.texthead0}>Present Condition: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Slab Work Upto: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={slabWork}
            onChangeText={slabWork => setSlabWork(slabWork)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Brickworks Upto: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={brickWork}
            onChangeText={brickWork => setBrickWork(brickWork)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Age of Property: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={age}
            onChangeText={age => setAge(age)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Residue Life: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={residueLife}
            onChangeText={residueLife => setResidueLife(residueLife)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Type of Building: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={typeOfBld}
            onValueChange={(itemValue, itemIndex) => setTypeOfBld(itemValue)}>
            <Picker.Item label="Select " />
            <Picker.Item label="Individual" value="Individual" />
            <Picker.Item label="Complex" value="Complex" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Paving Around Bldg.: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={pavingAroundBld}
            onValueChange={(itemValue, itemIndex) =>
              setPavingAroundBld(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item label="Cement Concrete" value="Cement Concrete" />
            <Picker.Item label="Cheqered Tiles" value="Cheqered Tiles" />
            <Picker.Item label="Paver Blocks" value="Paver Blocks" />
            <Picker.Item label="Tar Road" value="Tar Road" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Plot: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={plot}
            onValueChange={(itemValue, itemIndex) => setPlot(itemValue)}>
            <Picker.Item label="Select " />
            <Picker.Item label="Corner plot" value="Corner plot" />
            <Picker.Item label="Intermittent Plot" value="Intermittent Plot" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Width of Road: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={widthOfRoad}
            onValueChange={(itemValue, itemIndex) => setWidthOfRoad(itemValue)}>
            <Picker.Item label="Select " />
            <Picker.Item label="Below 20ft." value="Below 20ft." />
            <Picker.Item label="more than 20 ft." value="more than 20 ft." />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>
            Type of road available at present:{' '}
          </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={typeOfRoad}
            onChangeText={typeOfRoad => setTypeOfRoad(typeOfRoad)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Is it a land - locked land?: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={lockedLand}
            onChangeText={lockedLand => setLockedLand(lockedLand)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Shape of Land: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={shapeOfLand}
            onValueChange={(itemValue, itemIndex) => setShapeOfLand(itemValue)}>
            <Picker.Item label="Select " />
            <Picker.Item label="Rectangular" value="Rectangular" />
            <Picker.Item label="Irregular" value="Irregular" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Car Parking: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={carParking}
            onValueChange={(itemValue, itemIndex) => setCarParking(itemValue)}>
            <Picker.Item label="Select " />
            <Picker.Item label="Open Space" value="Open Space" />
            <Picker.Item label="Stilt" value="Stilt" />
            <Picker.Item label="Part Stilt" value="Part Stilt" />
            <Picker.Item label="Basement" value="Basement" />
            <Picker.Item label="Podium" value="Podium" />
            <Picker.Item label="Stack" value="Stack" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Maintainance of Bldg.: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={maintainanceOfBld}
            onValueChange={(itemValue, itemIndex) =>
              setMaintainanceOfBld(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item label="Good" value="Good" />
            <Picker.Item label="Average" value="Average" />
            <Picker.Item label="Poor" value="Poor" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Quality of Construction: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={qualityOfConstruction}
            onValueChange={(itemValue, itemIndex) =>
              setQualityOfConstruction(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item label="Good" value="Good" />
            <Picker.Item label="Average" value="Average" />
            <Picker.Item label="Poor" value="Poor" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Class: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={classs}
            onValueChange={(itemValue, itemIndex) => setClasss(itemValue)}>
            <Picker.Item label="Select " />
            <Picker.Item label="Middle Class" value="Middle Class" />
            <Picker.Item
              label="Upper Middle Class"
              value="Upper Middle Class"
            />
            <Picker.Item label="Higher Class" value="Higher Class" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Seperated Compound: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={sepereatedCompound}
            onValueChange={(itemValue, itemIndex) =>
              setSepereatedCompound(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Nature of boundary: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={natureOfBoundary}
            onValueChange={(itemValue, itemIndex) =>
              setNatureOfBoundary(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item
              label="Brick wall Compound"
              value="Brick wall Compound"
            />
            <Picker.Item label="Barbwire" value="Barbwire" />
            <Picker.Item label="Stone Wall" value="Stone Wall" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Water Availability: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={waterAvailability}
            onValueChange={(itemValue, itemIndex) =>
              setWaterAvailability(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item label="Municipal" value="Municipal" />
            <Picker.Item label="Borewell" value="Borewell" />
            <Picker.Item label="Well Water" value="Well Water" />
            <Picker.Item label="Grampanchayat" value="Grampanchayat" />
            <Picker.Item label="Rain" value="Rain" />
          </Picker>
        </View>

        <Text style={styles.texthead0}>Agreement Details: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Date: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Date"
            placeholderTextColor="#c1c1c1"
            value={agreementDate}
            onChangeText={agreementDate => setAgreementDate(agreementDate)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Purchase Price: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Price"
            placeholderTextColor="#c1c1c1"
            value={agreementPurchasePrice}
            onChangeText={agreementPurchasePrice =>
              setAgreementPurchasePrice(agreementPurchasePrice)
            }
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>
            Market Trend/ Broker name & comparable:{' '}
          </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={marketTrend}
            onChangeText={marketTrend => setMarketTrend(marketTrend)}
          />
        </View>

        <Text style={styles.texthead0}>Agreement Area: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Carpet: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={aCarpet}
            onChangeText={aCarpet => setACarpet(aCarpet)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Built up: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={aBuiltUp}
            onChangeText={aBuiltUp => setABuiltUp(aBuiltUp)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Saleable: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={aSaleable}
            onChangeText={aSaleable => setASaleable(aSaleable)}
          />
        </View>

        <Text style={styles.texthead0}>Measurments: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Carpet: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mCarpet}
            onChangeText={mCarpet => setMCarpet(mCarpet)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Built up: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBuiltUp}
            onChangeText={mBuiltUp => setMBuiltUp(mBuiltUp)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Saleable: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mSaleable}
            onChangeText={mSaleable => setMSaleable(mSaleable)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Balcony/Mezzanine: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={balcony}
            onChangeText={balcony => setBalcony(balcony)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Otla/Terrace: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={otla}
            onChangeText={otla => setOtla(otla)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Valuation Method: </Text>
          <Picker
            style={styles.textcontainer}
            selectedValue={valuationMethod}
            onValueChange={(itemValue, itemIndex) =>
              setValuationMethod(itemValue)
            }>
            <Picker.Item label="Select " />
            <Picker.Item label="CRM" value="CRM" />
            <Picker.Item label="Land and Bldg." value="Land and Bldg." />
            <Picker.Item label="Market Rate" value="Market Rate" />
            <Picker.Item
              label="Construction Cost Only"
              value="Construction Cost Only"
            />
          </Picker>
        </View>

        <Text style={styles.texthead0}>Current Fair Market value: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Area: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={cFMVArea}
            onChangeText={cFMVArea => setCFMVArea(cFMVArea)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Rate: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={cFMVRate}
            onChangeText={cFMVRate => setCFMVRate(cFMVRate)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Total: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={cFMVTotal}
            onChangeText={cFMVTotal => setCFMVTotal(cFMVTotal)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Insurance value: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={insurance}
            onChangeText={insurance => setInsurance(insurance)}
          />
        </View>

        <Text style={styles.texthead0}>Measurments: </Text>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Hall L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={parseInt(mHallL)}
            onChangeText={mHallL => setMHallL(mHallL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Hall B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={parseInt(mHallB)}
            onChangeText={mHallB => setMHallB(mHallB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Hall T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={() => +mHallL + +mHallB}
            onChangeText={mHallT => setMHallT(mHallT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Hall (Pt) L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mHallPtL}
            onChangeText={mHallPtL => setMHallPtL(mHallPtL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Hall (Pt) B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mHallPtB}
            onChangeText={mHallPtB => setMHallPtB(mHallPtB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Hall (Pt) T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mHallPtT}
            onChangeText={mHallPtT => setMHallPtT(mHallPtT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mKitchenL}
            onChangeText={mKitchenL => setMKitchenL(mKitchenL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mKitchenB}
            onChangeText={mKitchenB => setMKitchenB(mKitchenB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mKitchenT}
            onChangeText={mKitchenT => setMKitchenT(mKitchenT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen (Pt) L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mKitchenPtL}
            onChangeText={mKitchenPtL => setMKitchenPtL(mKitchenPtL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen (Pt) B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mKitchenPtB}
            onChangeText={mKitchenPtB => setMKitchenPtB(mKitchenPtB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Kitchen (Pt) T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mKitchenPtT}
            onChangeText={mKitchenPtT => setMKitchenPtT(mKitchenPtT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed1 L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed1L}
            onChangeText={mBed1L => setMBed1L(mBed1L)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed1 B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed1B}
            onChangeText={mBed1B => setMBed1B(mBed1B)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed1 T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed1T}
            onChangeText={mBed1T => setMBed1T(mBed1T)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed1 (Pt) L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed1PtL}
            onChangeText={mBed1PtL => setMBed1PtL(mBed1PtL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed1 (Pt) B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed1PtB}
            onChangeText={mBed1PtB => setMBed1PtB(mBed1PtB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed1 (Pt) T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed1PtT}
            onChangeText={mBed1PtT => setMBed1PtT(mBed1PtT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed2 L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed2L}
            onChangeText={mBed2L => setMBed2L(mBed2L)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed2 B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed2B}
            onChangeText={mBed2B => setMBed2B(mBed2B)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed2 T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed2T}
            onChangeText={mBed2T => setMBed2T(mBed2T)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed2 (Pt) L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed2PtL}
            onChangeText={mBed2PtL => setMBed2PtL(mBed2PtL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed2 (Pt) B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed2PtB}
            onChangeText={mBed2PtB => setMBed2PtB(mBed2PtB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed2 (Pt) T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed2PtT}
            onChangeText={mBed2PtT => setMBed2PtT(mBed2PtT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed3 L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed3L}
            onChangeText={mBed3L => setMBed3L(mBed3L)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed3 B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed3B}
            onChangeText={mBed3B => setMBed3B(mBed3B)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed3 T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed3T}
            onChangeText={mBed3T => setMBed3T(mBed3T)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed3 (Pt) L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed3PtL}
            onChangeText={mBed3PtL => setMBed3PtL(mBed3PtL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed3 (Pt) B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed3PtB}
            onChangeText={mBed3PtB => setMBed3PtB(mBed3PtB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed3 (Pt) T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed3PtT}
            onChangeText={mBed3PtT => setMBed3PtT(mBed3PtT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed4 L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed4L}
            onChangeText={mBed4L => setMBed4L(mBed4L)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed4 B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed4B}
            onChangeText={mBed4B => setMBed4B(mBed4B)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed4 T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed4T}
            onChangeText={mBed4T => setMBed4T(mBed4T)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed4 (Pt) L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed4PtL}
            onChangeText={mBed4PtL => setMBed4PtL(mBed4PtL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed4 (Pt) B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed4PtB}
            onChangeText={mBed4PtB => setMBed4PtB(mBed4PtB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bed4 (Pt) T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBed4PtT}
            onChangeText={mBed4PtT => setMBed4PtT(mBed4PtT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Passage L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mPassageL}
            onChangeText={mPassageL => setMPassageL(mPassageL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Passage B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mPassageB}
            onChangeText={mPassageB => setMPassageB(mPassageB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Passage T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mPassageT}
            onChangeText={mPassageT => setMPassageT(mPassageT)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>WC1 L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mWC1L}
            onChangeText={mWC1L => setMWC1L(mWC1L)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>WC1 B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mWC1B}
            onChangeText={mWC1B => setMWC1B(mWC1B)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>WC1 T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mWC1T}
            onChangeText={mWC1T => setMWC1T(mWC1T)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bath1 L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBath1L}
            onChangeText={mBath1L => setMBath1L(mBath1L)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bath1 B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBath1B}
            onChangeText={mBath1B => setMBath1B(mBath1B)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>Bath1 T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mBath1T}
            onChangeText={mBath1T => setMBath1T(mBath1T)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>W and B L: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mWAndBL}
            onChangeText={mWAndBL => setMWAndBL(mWAndBL)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>W and B B: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mWAndBB}
            onChangeText={mWAndBB => setMWAndBB(mWAndBB)}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.texthead}>W and B T: </Text>
          <TextInput
            style={styles.textcontainer}
            placeholder="Enter Details"
            placeholderTextColor="#c1c1c1"
            value={mWAndBT}
            onChangeText={mWAndBT => setMWAndBT(mWAndBT)}
          />
        </View>

        {/* SUBMIT */}

        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() =>
            Linking.openURL(
              `mailto:karan@kakode.com?subject=Field Visit Report&body= Visit By: ${visitBy} %0D%0A %0D%0A Visit Date: ${visitDate} %0D%0A %0D%0A Given By: ${givenBy} %0D%0A %0D%0A Bank Name: ${bankName} %0D%0A %0D%0A Bank Branch: ${branch} %0D%0A %0D%0A Survey in Presence of: ${surveyinpresenceof} %0D%0A %0D%0A Name of Purchaser or Owner/s: ${purchaserowner} %0D%0A %0D%0A Application Address: ${applicantAddress} %0D%0A %0D%0A Property Address: ${propertyAddress} %0D%0A %0D%0A Name of the Society: ${nameofthesociety} %0D%0A %0D%0A Society Regn. No.: ${societyRegnNo} %0D%0A %0D%0A Nearest Station and Distance/Proximity: ${nearestStation} %0D%0A %0D%0A Presently Occupied: ${presentlyOccupied} %0D%0A %0D%0A Tenant Name: ${tenantName} %0D%0A %0D%0A Monthly Rent: ${monthlyRent} %0D%0A %0D%0A Landmark: ${landmark} %0D%0A %0D%0A S.No./Plot/Cts No.: ${sNo} %0D%0A %0D%0A Area of Plot: ${areaOfPlot} %0D%0A %0D%0A Village Name: ${villageName} %0D%0A %0D%0A Bounded by (For Flat): %0D%0A %0D%0A East- ${flatE} West- ${flatW} North- ${flatN} South- ${flatS} %0D%0A %0D%0A Bounded by (For Building): %0D%0A %0D%0A East- ${buildingE} West- ${buildingW} North- ${buildingN} South- ${buildingS} %0D%0A %0D%0A Type of Land: ${typeOfLand} %0D%0A %0D%0A Tenure: ${tenture} %0D%0A %0D%0A Type locality: ${typeLocality} %0D%0A %0D%0A Type of Property: ${typeOfProperty} %0D%0A %0D%0A Flat Details: %0D%0A %0D%0A Hall- ${flatHall} %0D%0A %0D%0A Kitchen- ${flatKitchen} %0D%0A %0D%0A Bedroom- ${flatBedroom} %0D%0A %0D%0A Dining- ${flatDinning} %0D%0A %0D%0A Bath- ${flatBath} %0D%0A %0D%0A WC- ${flatWC} Attached WC And Bath- ${flatAttachedWCAndBath} %0D%0A %0D%0A Balcony- ${flatBalcony} %0D%0A %0D%0A F/B- ${flatFB} D/B- ${flatDB} %0D%0A %0D%0A Terrace- ${flatTerrace} %0D%0A %0D%0A Interiors: %0D%0A %0D%0A Flooring- ${flooring} %0D%0A %0D%0A Kitchen- ${kitchen} %0D%0A %0D%0A Windows- ${windows} %0D%0A %0D%0A Doors- ${doors} %0D%0A %0D%0A WC- ${wC} %0D%0A %0D%0A Bath- ${bath} %0D%0A %0D%0A Paint- ${paint} %0D%0A %0D%0A POP- ${pOP} %0D%0A %0D%0A Exterior Paint: ${exteriorPaint} %0D%0A %0D%0A Garden: ${garden} %0D%0A %0D%0A Type of Structure: ${typeOfStructure} %0D%0A %0D%0A No. of Floors: %0D%0A %0D%0A Basement- ${basement} %0D%0A %0D%0A G- ${g} %0D%0A %0D%0A Podium- ${podium} %0D%0A %0D%0A Stilt- ${stilt} %0D%0A %0D%0A Part Stilt- ${partStilt} %0D%0A %0D%0A Part/Upper Floors- ${upperFloors} %0D%0A %0D%0A No. of Lift in Bldg.: ${noOfLift} %0D%0A %0D%0A No. of flats per floor: ${noOfFlatsPerFloors} %0D%0A %0D%0A No. of shops and Flats in Bldg.: ${noOfShopsFlats} %0D%0A %0D%0A Present Condition: %0D%0A %0D%0A Slab Work upto- ${slabWork} %0D%0A %0D%0A Brickworks upto- ${brickWork} %0D%0A %0D%0A Age of Property: ${age} %0D%0A %0D%0A Residual Life: ${residueLife} %0D%0A %0D%0A Type of Bldg.: ${typeOfBld} %0D%0A %0D%0A Paving Around Bldg.: ${pavingAroundBld} %0D%0A %0D%0A Plot: ${plot} %0D%0A %0D%0A Width of Road: ${widthOfRoad} %0D%0A %0D%0A Type of road available at present: ${typeOfRoad} %0D%0A %0D%0A Is it land - locked land?: ${lockedLand} %0D%0A %0D%0A Shape of land: ${shapeOfLand} %0D%0A %0D%0A Car Parking: ${carParking} %0D%0A %0D%0A Maintainance of Bldg.: ${maintainanceOfBld} %0D%0A %0D%0A Quality of Construction: ${qualityOfConstruction} %0D%0A %0D%0A Class: ${classs} %0D%0A %0D%0A Seperated Compound/ Nature of boundary: ${sepereatedCompound} %0D%0A %0D%0A Water Availability: ${waterAvailability} %0D%0A %0D%0A Agreement Details: Date- ${agreementDate} Purchase Price: ${agreementPurchasePrice} %0D%0A %0D%0A Market Trend/Broker name and comparable: ${marketTrend} %0D%0A %0D%0A Agreement Area: Carpet- ${aCarpet} Built up- ${aBuiltUp} Saleable- ${aSaleable} %0D%0A %0D%0A Measurements: Carpet- ${mCarpet} Built up- ${mBuiltUp} Saleable- ${mSaleable} %0D%0A %0D%0A Balcony/Mezzanine: ${balcony} %0D%0A %0D%0A Otla/Terrace: ${otla} %0D%0A %0D%0A Valuation Method: ${valuationMethod} %0D%0A %0D%0A Current Fair Market Value: Area- ${cFMVArea} Rate- ${cFMVRate} Total- ${cFMVTotal} %0D%0A %0D%0A Insurance Value: ${insurance} %0D%0A %0D%0A Measurements: %0D%0A %0D%0A Hall: L-${mHallL} B-${mHallB} Total- ${mHallT} %0D%0A %0D%0A Hall(pt) L-${mHallPtL} B-${mHallPtB} Total- ${mHallPtT} %0D%0A %0D%0A Kitchen: L-${mKitchenL} B-${mKitchenB} Total- ${mKitchenT} %0D%0A %0D%0A Kitchen(pt) L-${mKitchenPtL} B-${mKitchenPtB} Total- ${mKitchenPtT} %0D%0A %0D%0A Hall: L-${mBed1L} B-${mBed1B} Total- ${mBed1T} %0D%0A %0D%0A Bed1(pt) L-${mBed1PtL} B-${mBed1PtB} Total- ${mBed1PtT} %0D%0A %0D%0A Bed2: L-${mBed2L} B-${mBed2B} Total- ${mBed2T} %0D%0A %0D%0A Bed2(pt) L-${mBed2PtL} B-${mBed2PtB} Total- ${mBed2PtT} %0D%0A %0D%0A Bed3: L-${mBed3L} B-${mBed3B} Total- ${mBed3T} %0D%0A %0D%0A Bed3(pt) L-${mBed3PtL} B-${mBed3PtB} Total- ${mBed3PtT} %0D%0A %0D%0A Bed4: L-${mBed4L} B-${mBed4B} Total- ${mBed4T} %0D%0A %0D%0A Bed4(pt) L-${mBed4PtL} B-${mBed4PtB} Total- ${mBed4PtT} %0D%0A %0D%0A Passage: L-${mPassageL} B-${mPassageB} Total- ${mPassageT} %0D%0A %0D%0A WC1: L-${mWC1L} B-${mWC1B} Total- ${mWC1T} %0D%0A %0D%0A Bath1: L-${mBath1L} B-${mBath1B} Total- ${mBath1T} %0D%0A %0D%0A W and B: L-${mWAndBL} B-${mWAndBB} Total- ${mWAndBT}`,
            )
          }>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => printPDF()}>
          <Text style={styles.button2}>Save as PDF</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
  title: {
    fontFamily: 'sans-serif-medium',
    color: '#34A853',
    flex: 1,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 30,
  },
  texthead0: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 7,
    marginRight: 2,
    marginVertical: 5,
    width: '95%',
    fontWeight: '900',
  },
  texthead: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 7,
    marginRight: 1,
    width: '35%',
  },
  formContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    height: 97,
  },
  textcontainer: {
    fontSize: 18,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '61%',
    borderRadius: 10,
    backgroundColor: 'white',
    color: '#000',
    // justifyContent: 'flex-end',
  },
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  button: {
    fontSize: 20,
    color: 'white',
    width: 120,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#c01c00',
    padding: 8,
    textAlign: 'center',
  },
  button2: {
    fontSize: 18,
    color: 'white',
    width: 120,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#c01c00',
    padding: 8,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
    width: 120,
    height: 120,
  },
});

export default App;
