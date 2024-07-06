import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import serviceImagePlaceholder from '../../img/blog-1.jpg'; // Placeholder image for services

const Services = () => {
  const services = [
    {
      name: "GROWTH ASSISTANT",
      description: "Campaign Management \nAggregated reporting and mapping \nQA and Testing \nUpdating Dashboards \nAffiliate Compliance \nCompetitive Analysis \nKeyword research and market trends \nURL set- up \nFunnel Management \nCRM management \nCMS updates and changes \nCustomer service communications \nProactive website bug finding and investigation \nInfluencer programs management \nProject and Process Management \nDocumentation",
      price: "₱75,000 /Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    },
    {
      name: "DESIGN ASSISTANT",
      description: "Social media creative content \nEditing, retouching, and adding elements to images and creative \nResizing images and creative \nRenaming of images \nGIF creation \n3D modelling \nAnimation \nVideo Editing \nBuilding website graphics and banners \nCreating marketing email graphics \nMaking banner ads \nWeb Design \nUI/ UX Design \nCreate marketing decks and slideshows \nBranding(logo, product label, etc.)",
      price: "₱50,000 /Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    },
    {
      name: "Growth Assistant",
      description: "Campaign Management\nAggregated reporting and mapping\nQA and Testing\nUpdating Dashboards\nAffiliate Compliance\nCompetitive Analysis\nKeyword research and market trends\nURL set-up\nFunnel Management\nCRM management\nCMS updates and changes\nCustomer service communications\nProactive website bug finding and investigation\nInfluencer programs management\nProject and Process Management\nDocumentation",
      price: "₱75,000 / Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    },
    {
      name: "GROWTH ASSISTANT",
      description: "Campaign Management \nAggregated reporting and mapping \nQA and Testing \nUpdating Dashboards \nAffiliate Compliance \nCompetitive Analysis \nKeyword research and market trends \nURL set- up \nFunnel Management \nCRM management \nCMS updates and changes \nCustomer service communications \nProactive website bug finding and investigation \nInfluencer programs management \nProject and Process Management \nDocumentation",
      price: "₱75,000 /Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    },
    {
      name: "DESIGN ASSISTANT",
      description: "Social media creative content \nEditing, retouching, and adding elements to images and creative \nResizing images and creative \nRenaming of images \nGIF creation \n3D modelling \nAnimation \nVideo Editing \nBuilding website graphics and banners \nCreating marketing email graphics \nMaking banner ads \nWeb Design \nUI/ UX Design \nCreate marketing decks and slideshows \nBranding(logo, product label, etc.)",
      price: "₱50,000 /Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    },
    {
      name: "Growth Assistant",
      description: "Campaign Management\nAggregated reporting and mapping\nQA and Testing\nUpdating Dashboards\nAffiliate Compliance\nCompetitive Analysis\nKeyword research and market trends\nURL set-up\nFunnel Management\nCRM management\nCMS updates and changes\nCustomer service communications\nProactive website bug finding and investigation\nInfluencer programs management\nProject and Process Management\nDocumentation",
      price: "₱75,000 / Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    },
    {
      name: "Growth Assistant",
      description: "Campaign Management\nAggregated reporting and mapping\nQA and Testing\nUpdating Dashboards\nAffiliate Compliance\nCompetitive Analysis\nKeyword research and market trends\nURL set-up\nFunnel Management\nCRM management\nCMS updates and changes\nCustomer service communications\nProactive website bug finding and investigation\nInfluencer programs management\nProject and Process Management\nDocumentation",
      price: "₱75,000 / Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    },
    {
      name: "Growth Assistant",
      description: "Campaign Management\nAggregated reporting and mapping\nQA and Testing\nUpdating Dashboards\nAffiliate Compliance\nCompetitive Analysis\nKeyword research and market trends\nURL set-up\nFunnel Management\nCRM management\nCMS updates and changes\nCustomer service communications\nProactive website bug finding and investigation\nInfluencer programs management\nProject and Process Management\nDocumentation",
      price: "₱75,000 / Month",
      image: "https://via.placeholder.com/400x200" // Replace with actual image URL or import image locally
    }
    // Add more services as needed
  ];

  return (
    <div>
      <Header />

      <main className="container mx-auto px-4 pt-6">
        <div className="border-l-8 border-blue-700 pl-5 mt-4 mb-12">
          <h6 className="text-blue-700 text-md uppercase">Price</h6>
          <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-5">Explore our comprehensive services and transparent pricing</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded shadow-md overflow-hidden text-center hover:shadow-xl transition duration-300 flex flex-col h-full">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 sm:h-48 md:h-56 object-cover object-center rounded-t"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 text-blue-500 tracking-wide uppercase">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-gray-700">{service.price}</p>
                  <a href="/booking" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-2">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer className="mt-6" /> {/* Added margin-top to Footer */}
    </div>
  );
};

export default Services;
