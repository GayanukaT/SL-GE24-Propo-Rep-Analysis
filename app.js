const colorMap = {
    NPP: "#C4094A",
    SJB: "#0B9444",
    ITAK: "#F5EF1D",
    NDF: "#2C5A45",
    SLPP: "#87171A",
    SLMC: "#007B48",
    SB: "#173768",
    UNP: "#07AF14",
    DTNA: "#FFFF00",
    ACTC: "#000080",
    ACMC: "#9ACD32",
    SLLP: "#0C9DD4",
    Others: "#AAAAAA"
  };

const districtData = {
    "All Island": {
      "votes": {
        "NPP": 6863186,
        "SJB": 1968716,
        "ITAK": 257813,
        "NDF": 500835,
        "SLPP": 350429,
        "SLMC": 87038,
        "SB": 178006,
        "UNP": 66234,
        "DTNA": 65382,
        "ACTC": 39894,
        "ACMC": 33911,
        "IND17-10": 27855,
        "SLLP": 17710,
        "Others": 690997,
      },
      "seats": {
        "NPP": 159,
        "SJB": 40,
        "ITAK": 8,
        "NDF": 5,
        "SLPP": 3,
        "SLMC": 3,
        "SB": 1,
        "UNP": 1,
        "DTNA": 1,
        "ACTC": 1,
        "ACMC": 1,
        "IND17-10": 1,
        "SLLP": 1,
      }
    },
    "Colombo": {
      "votes": {
        "NPP": 788636,
        "SJB": 208249,
        "Others": 152240,
      },
      "seats": {
        "NPP": 14,
        "SJB": 4,
      }
    },
    "Gampaha": {
      "votes": {
        "NPP": 898759,
        "SJB": 150445,
        "Others": 186108,
      },
      "seats": {
        "NPP": 16,
        "SJB": 3,
      }
    },
    "Kalutara": {
      "votes": {
        "NPP": 452398,
        "SJB": 128932,
        "NDF": 34257,
        "Others": 68905,
      },
      "seats": {
        "NPP": 8,
        "SJB": 2,
        "NDF": 1,
      }
    },
    "Mahanuwara": {
      "votes": {
        "NPP": 500596,
        "SJB": 145939,
        "NDF": 50889,
        "Others": 77491,
      },
      "seats": {
        "NPP": 9,
        "SJB": 2,
        "NDF": 1,
      }
    },
    "Matale": {
      "votes": {
        "NPP": 181678,
        "SJB": 53200,
        "Others": 39723,
      },
      "seats": {
        "NPP": 4,
        "SJB": 1,
      }
    },
    "Nuwaraeliya": {
      "votes": {
        "NPP": 161167,
        "SJB": 101589,
        "UNP": 64672,
        "Others": 60228,
      },
      "seats": {
        "NPP": 5,
        "SJB": 2,
        "UNP": 1,
      }
    },
    "Galle": {
      "votes": {
        "NPP": 406428,
        "SJB": 93486,
        "SLPP": 31201,
        "Others": 65976,
      },
      "seats": {
        "NPP": 7,
        "SJB": 1,
        "SLPP": 1,
      }
    },
    "Matara": {
      "votes": {
        "NPP": 317541,
        "SJB": 74475,
        "Others": 62718,
      },
      "seats": {
        "NPP": 6,
        "SJB": 1,
      }
    },
    "Hambantota": {
      "votes": {
        "NPP": 234083,
        "SJB": 52170,
        "SLPP": 26268,
        "Others": 40140,
      },
      "seats": {
        "NPP": 5,
        "SJB": 1,
        "SLPP": 1,
      }
    },
    "Jaffna": {
      "votes": {
        "NPP": 80830,
        "ITAK": 63327,
        "ACTC": 27986,
        "IND17-10": 27855,
        "Others": 125314,
      },
      "seats": {
        "NPP": 3,
        "ITAK": 1,
        "ACTC": 1,
        "IND17-10": 1,
      }
    },
    "Vanni": {
      "votes": {
        "NPP": 39894,
        "SJB": 32232,
        "ITAK": 29711,
        "DTNA": 21102,
        "SLLP": 17710,
        "Others": 55237,
      },
      "seats": {
        "NPP": 2,
        "SJB": 1,
        "ITAK": 1,
        "DTNA": 1,
        "SLLP": 1,
      }
    },
    "Batticaloa": {
        "votes": {
          "ITAK": 96975,
          "NPP": 55498,
          "SLMC": 40139,
          "Others": 94441,
        },
        "seats": {
          "ITAK": 3,
          "NPP": 1,
          "SLMC": 1,
        }
    },
    "Digamadulla": {
        "votes": {
          "NPP": 146313,
          "SLMC": 46899,
          "ACMC": 33911,
          "ITAK": 33632,
          "Others": 102169,
        },
        "seats": {
          "NPP": 4,
          "SLMC": 1,
          "ACMC": 1,
          "ITAK": 1,
        }
    },
    "Trincomalee": {
        "votes": {
          "NPP": 87031,
          "SJB": 53058,
          "ITAK": 34168,
          "Others": 30631,
        },
        "seats": {
          "NPP": 2,
          "SJB": 1,
          "ITAK": 1,
        }
    },
    "Kurunegala": {
        "votes": {
          "NPP": 651476,
          "SJB": 189394,
          "Others": 95745,
        },
        "seats": {
          "NPP": 12,
          "SJB": 3,
        }
    },
    "Puttalam": {
        "votes": {
          "NPP": 239576,
          "SJB": 65679,
          "Others": 74426,
        },
        "seats": {
          "NPP": 6,
          "SJB": 2,
        }
    },
    "Anuradhapura": {
        "votes": {
          "NPP": 331692,
          "SJB": 98176,
          "Others": 63550,
        },
        "seats": {
          "NPP": 7,
          "SJB": 2,
        }
    },
    "Polonnaruwa": {
        "votes": {
          "NPP": 159010,
          "SJB": 43822,
          "Others": 28727,
        },
        "seats": {
          "NPP": 4,
          "SJB": 1,
        }
    },
    "Badulla": {
        "votes": {
          "NPP": 275180,
          "SJB": 102958,
          "NDF": 36450,
          "Others": 55118,
        },
        "seats": {
          "NPP": 6,
          "SJB": 2,
          "NDF": 1,
        }
    },
    "Monaragala": {
        "votes": {
          "NPP": 174730,
          "SJB": 62014,
          "Others": 35112,
        },
        "seats": {
          "NPP": 5,
          "SJB": 1,
        }
    },
    "Ratnapura": {
        "votes": {
          "NPP": 368229,
          "SJB": 133041,
          "Others": 95100,
        },
        "seats": {
          "NPP": 8,
          "SJB": 3,
        }
    },
    "Kegalle": {
        "votes": {
          "NPP": 312441,
          "SJB": 109691,
          "Others": 60019,
        },
        "seats": {
          "NPP": 7,
          "SJB": 2,
        }
    },
    "National List": {
        "votes": {
          "NPP": 6863186,
          "SJB": 1968716,
          "ITAK": 257813,
          "NDF": 500835,
          "SLPP": 350429,
          "SLMC": 87038,
          "SB": 178006,
          "Others": 941983,
        },
        "seats": {
          "NPP": 18,
          "SJB": 5,
          "ITAK": 1,
          "NDF": 2,
          "SLPP": 1,
          "SLMC": 1,
          "SB": 1,
        }
    } 
  };
  
  function showGraphs(district) {
    console.log(`District clicked: ${district}`);
    const data = districtData[district];
  
    const votes = Object.values(data.votes);
    const seats = Object.values(data.seats);
    const labels = Object.keys(data.votes);
  
    const votesColors = labels.map(label => colorMap[label] || "#DCDCDC");
    const seatsColors = labels.map(label => colorMap[label] || "#DCDCDC");
  
    const votesTrace = {
      labels: labels,
      values: votes,
      type: "pie",
      textinfo: "none",
      hole: 0.4,
      direction: "clockwise",
      marker: {
        colors: votesColors,
        line: {
          color: "white",
          width: 3,
        },
      },
      domain: { x: [0, 1], y: [0, 1] },
    };
  
    const seatsTrace = {
      labels: labels,
      values: seats,
      type: "pie",
      textinfo: "none",
      hole: 0.7,
      direction: "clockwise",
      marker: {
        colors: seatsColors,
        line: {
          color: "white",
          width: 3,
        },
      },
      domain: { x: [0, 1], y: [0, 1] },
    };
  
    const layout = {
      title: `${district} - Votes (Inner) vs Seats (Outer)`,
      showlegend: true,
      legend: {
        traceorder: "normal",
      },
    };
  
    const dataToPlot = [votesTrace, seatsTrace];
  
    Plotly.newPlot("chartDiv", dataToPlot, layout);
  }
  