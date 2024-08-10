import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null,
    };
  }

  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { hoveredIndex } = this.state;

    return (
      <div>
        <h1 style={styles.heading}>Categories</h1>
        <div style={styles.container}>
          {[
            {
              src: "https://img.freepik.com/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263158.jpg",
              text: "Accessories",
            },
            {
              src: "https://media.istockphoto.com/id/1186670499/photo/tender-jewerly-on-female-hand-close-up-shot.jpg?s=612x612&w=0&k=20&c=HT-sJ25or5MsW4aacTMJxNesrF46xh7SsqoYZrVufp8=",
              text: "Jewellery",
            },
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNJKUaqKu5QM46x0nH4LouiUsBjStp6eZVg&s",
              text: "HandBags",
            },
            {
              src: "https://m.media-amazon.com/images/I/71bAEzE2mRL._AC_SL1500_.jpg",
              text: "Women's Wear",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                ...(hoveredIndex === index ? styles.slideHover : {}),
              }}
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={this.handleMouseLeave}
            >
              <img src={item.src} alt="" style={styles.image} />
              {hoveredIndex === index && (
                <div style={styles.text}>{item.text}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  heading: {
    fontFamily: "Arial, sans-serif", // Set the font family
    fontSize: "40px", // Set the font size
    fontWeight: "bold", // Set the font weight
    textAlign: "center", // Center align the heading
    margin: "20px 0", // Add margin for spacing
  },
  container: {
    display: "flex",
    flexWrap: "nowrap", // Prevent wrapping to a new row
    padding: "0", // Remove padding to avoid extra space
    gap: "10px", // Space between images
    overflowX: "auto", // Allow horizontal scrolling if needed
  },
  slide: {
    position: "relative",
    flex: "0 0 calc(25% - 10px)", // Four items per row with gaps
    overflow: "hidden",

    borderRadius: "10px", // Optional: rounded corners
    transition: "box-shadow 0.3s ease-in-out", // Smooth transition for box-shadow
  },
  image: {
    width: "100%",
    height: "600px", // Fixed height to ensure equal height
    objectFit: "cover", // Ensures the image covers the area without distortion
    display: "block",
  },
  text: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    right: "10px",
    color: "blue",
    backgroundColor: "white", // Background color for the text box
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Optional: box shadow for better visibility
    textAlign: "center", // Center align text
    opacity: 1, // Ensure text is visible
    transition: "opacity 0.3s ease-in-out", // Smooth transition for text visibility
  },
  slideHover: {
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)", // Box-shadow on hover
  },
};

export default Categories;
