  function calculateMilitaryStrength(countryData) {
	  // Base strength calculation
		// Calculate army size based on recruitment percentage
    const armySize = (countryData.population * countryData.recruitment) / 100;
		
		const populationNumber = countryData.population / 2000000;
	        const armyStrength = armySize / 80000;
	        const motorStrength = countryData.motor / 700;
	        const navyStrength = countryData.navy / 300;
	        const airforceStrength = countryData.airforce / 200;
	
	        let militaryStrength = armyStrength + motorStrength + navyStrength + airforceStrength + populationNumber;
	
	    // Stability adjustment
		
		if (countryData.stability >= 1 && countryData.stability <= 10) {
		    militaryStrength -= militaryStrength * 0.90; // Decrease by 90%
		} else if (countryData.stability >= 11 && countryData.stability <= 20) {
		    militaryStrength -= militaryStrength * 0.70; // Decrease by 70%
		} else if (countryData.stability >= 21 && countryData.stability <= 40) {
		    militaryStrength -= militaryStrength * 0.40; // Decrease by 40%
		} else if (countryData.stability >= 41 && countryData.stability <= 44) {
		    militaryStrength -= militaryStrength * 0.20; // Decrease by 20%
		} else if (countryData.stability >= 45 && countryData.stability <= 55) {
		    // No change (0%)
		} else if (countryData.stability >= 56 && countryData.stability <= 65) {
		    militaryStrength += militaryStrength * 0.30; // Increase by 30%
		} else if (countryData.stability >= 66 && countryData.stability <= 74) {
		    militaryStrength += militaryStrength * 0.50; // Increase by 50%
		} else if (countryData.stability >= 75 && countryData.stability <= 100) {
		    militaryStrength += militaryStrength * 0.70; // Increase by 70%
		}
		
	    // Military training adjustment
	    if (countryData.military_training === 0) {
	        militaryStrength -= militaryStrength * 0.90;
	    } else if (countryData.military_training === 1) {
	        militaryStrength -= militaryStrength * 0.40;
	    } else if (countryData.military_training === 2) {
	        // No change
	    } else if (countryData.military_training === 3) {
	        militaryStrength += militaryStrength * 0.20;
	    } else if (countryData.military_training === 4) {
	        militaryStrength += militaryStrength * 0.40;
	    } else if (countryData.military_training === 5) {
	        militaryStrength += militaryStrength * 0.90;
	    }
	
	    // Infrastructure level adjustment
	    if (countryData.infrastructure_level === 1) {
	        militaryStrength += 0;
	    } else if (countryData.infrastructure_level === 2) {
	        militaryStrength += 0.2;
	    } else if (countryData.infrastructure_level === 3) {
	        militaryStrength += 0.4;
	    } else if (countryData.infrastructure_level === 4) {
	        militaryStrength += 0.6;
	    } else if (countryData.infrastructure_level === 5) {
	        militaryStrength += 0.8;
	    } else if (countryData.infrastructure_level === 6) {
	        militaryStrength += 1.5;
	    }
	
	    // Apply multiplier
	    militaryStrength *= countryData.multiplier;
	
	    return militaryStrength.toFixed(2); // Round to two decimal places
	}
