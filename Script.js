
//localCompare needs to equal 0 for true

function systemCheck(){
    if ((document.getElementById('sysCase').value.localeCompare("Service") == 0)){ //&& (document.getElementById('GM').valuelocaleCompare("none") != 0)){
        document.getElementById('GMType').style.display = 'none';
        document.getElementById('GMTypeLabel').style.display = 'none';
    } else if (document.getElementById('sysCase').value.localeCompare("System") == 0){
        document.getElementById('GMType').style.display = 'unset';
        document.getElementById('GMTypeLabel').style.display = 'unset';
    }
}


function runForm(){
    var sysCase = document.getElementById("sysCase").value;
    var GMType = document.getElementById("GMType").value;
    var GM = document.getElementById("GM").value;
    var cValue = document.getElementById("cValue").value;
    var mustWin = document.getElementById("mustWin").checked;
    
    if (cValue <= 100000){
        outputResults("Projekter under 15 kEUR bør undgåes og bookes via TIPO",
                        "Projekter under 15 kEUR bør undgåes og bookes via TIPO",
                        "Projekter under 15 kEUR bør undgåes og bookes via TIPO");
        //document.getElementById("approver").innerHTML = "Projekter under 15 kEUR bør undgåes og bookes via TIPO";
        //document.getElementById("tools").innerHTML = "Projekter under 15 kEUR bør undgåes og bookes via TIPO";
        //document.getElementById("sme").innerHTML = "Projekter under 15 kEUR bør undgåes og bookes via TIPO";
    }
    
    /////////////////////// SERVICE AND CCO /////////////////////////////
    if ((sysCase.localeCompare("Service") == 0) && (GMType.localeCompare("CCO") == 0)){
        if (100000 < cValue && cValue <= 745000){
            if(GM > 45){
                outputResults("Account Manager",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(40 < GM && GM <= 45){
                outputResults("Account Manager -> Country Sales Manager",
                                "Tilbudsreview og QL med Lifecycle",
                                "None");
            }
            if(25 < GM && GM <= 40){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 25){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                    "Tilbudsreview, QL med Lifecycle og P&L impact",
                                    "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                    "Global DOA",
                                    "Global DOA");
                }
            }
        }

        if (745000 < cValue && cValue <= 3700000){
            if(GM > 40){
                outputResults("Account Manager -> Country Sales Manager",
                                "Tilbudsreview og QL med Lifecycle",
                                "None");
            }
            if(25 < GM && GM <= 40){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 25){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                    "Tilbudsreview, QL med Lifecycle og P&L impact",
                                    "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                    "Global DOA",
                                    "Global DOA");
                }
            }
        }

        if (3700000 < cValue && cValue <= 7450000){
            if(GM > 25){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 25){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                    "Tilbudsreview, QL med Lifecycle og P&L impact",
                                    "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                    "Global DOA",
                                    "Global DOA");
                }
            }
        }

        if (cValue >= 7450000){
            outputResults("Global DOA",
                            "Global DOA",
                            "Global DOA");
        }
    }
    /////////////////////// SERVICE AND Local /////////////////////////////
    if ((sysCase.localeCompare("Service") == 0) && (GMType.localeCompare("Local") == 0)){
        if (100000 < cValue && cValue <= 745000){
            if(GM > 35){
                outputResults("Account Manager",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(30 < GM && GM <= 35){
                outputResults("Account Manager -> Country Sales Manager",
                                "Tilbudsreview og QL med Lifecycle",
                                "None");
            }
            if(25 < GM && GM <= 30){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 25){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                    "Tilbudsreview, QL med Lifecycle og P&L impact",
                                    "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                    "Global DOA",
                                    "Global DOA");
                }
            }
        }

        if (745000 < cValue && cValue <= 3700000){
            if(GM > 30){
                outputResults("Account Manager -> Country Sales Manager",
                                "Tilbudsreview og QL med Lifecycle",
                                "None");
            }
            if(25 < GM && GM <= 30){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 25){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                    "Tilbudsreview, QL med Lifecycle og P&L impact",
                                    "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                    "Global DOA",
                                    "Global DOA");
                }
            }
        }

        if (3700000 < cValue && cValue <= 7450000){
            if(GM > 25){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 25){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                    "Tilbudsreview, QL med Lifecycle og P&L impact",
                                    "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                    "Global DOA",
                                    "Global DOA");
                }
            }
        }

        if (cValue >= 7450000){
            outputResults("Global DOA",
                            "Global DOA",
                            "Global DOA");
        }
    }
    /////////////////////// System AND CCO /////////////////////////////
    if ((sysCase.localeCompare("System") == 0) && (GMType.localeCompare("CCO") == 0)){
        if (100000 < cValue && cValue <= 745000){
            if(GM > 28){
                outputResults("Account Manager",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(25 < GM && GM <= 28){
                outputResults("Account Manager -> Country Sales Manager",
                                "Tilbudsreview og QL med Lifecycle",
                                "None");
            }
            if(22 < GM && GM <= 25){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 22){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                "Tilbudsreview, QL med Lifecycle og P&L impact",
                                "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                "Global DOA",
                                "Global DOA");
                }
            }
        }

        if (745000 < cValue && cValue <= 3700000){
            if(GM > 25){
                outputResults("Account Manager -> Country Sales Manager",
                                "Tilbudsreview og QL med Lifecycle",
                                "None");
            }
            if(22 < GM && GM <= 25){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 22){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                "Tilbudsreview, QL med Lifecycle og P&L impact",
                                "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                "Global DOA",
                                "Global DOA");
                }
            }
        }

        if (3700000 < cValue && cValue <= 7450000){
            if(GM > 22){
                outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP",
                                "Fast Track Checkliste eller Tender Review og QL",
                                "None");
            }
            if(GM <= 22){
                if(mustWin == true){
                    outputResults("Account Manager -> Country Sales Manager -> FBP -> Country VP - > Nordic VP (via email)",
                                "Tilbudsreview, QL med Lifecycle og P&L impact",
                                "Finans, Indkøb");
                } else{
                    outputResults("Global DOA",
                                "Global DOA",
                                "Global DOA");
                }
            }
        }

        if (cValue >= 7450000){
            outputResults("Global DOA",
                        "Global DOA",
                        "Global DOA");
        }
    }
}

function outputResults(approval, tools, SME){
    document.getElementById("approver").innerHTML = approval;
    document.getElementById("tools").innerHTML = tools;
    document.getElementById("sme").innerHTML = SME;

}
