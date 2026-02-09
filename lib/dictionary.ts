export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      title: "Quality Maintenance for Your Home",
      subtitle: "From expert Air Conditioning service to general repairs, Santair is your trusted neighborhood partner.",
      cta: "Book a Service",
    },
    form: {
      title: "Quick Request",
      location: "Location",
      serviceType: "Service Type",
      specificService: "What do you need?",
      selectLocation: "Select your area",
      selectType: "Select service category",
      selectService: "Select specific task",
      name: "Your Name",
      phone: "Phone Number",
      submit: "Send Request",
      success: "Thank you! We'll contact you shortly.",
    },
    services: {
      ac: {
        title: "Air Conditioning",
        desc: "Installation, maintenance, and expert repairs for all AC units.",
        options: ["Installation", "Maintenance", "Cleaning", "Repair", "Gas Refill"]
      },
      repairs: {
        title: "Home Repairs",
        desc: "Small to advanced repairs for your property.",
        options: ["Furniture Assembly", "Wall Painting", "Door/Window Repair", "General Maintenance"]
      },
      plumbing: {
        title: "Plumbing",
        desc: "Fixing leaks, clogs, and new installations.",
        options: ["Leaks", "Clogs", "Faucet Change", "New Installation", "Water Heater"]
      },
      electrical: {
        title: "Electrical",
        desc: "Safe electrical work for your home or business.",
        options: ["Short Circuit Fix", "Outlet Change", "Lighting Installation", "Panel Upgrade"]
      }
    },
    locations: ["North Area", "South Area", "Center", "Suburbs", "Industrial Park"],
    testimonial: {
      quote: "Quality work and great attitude. They fixed my AC and also helped with a plumbing leak on the same visit. Highly recommended!",
      username: "Marc Johnson",
      role: "Homeowner",
    }
  },
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      title: "Mantenimiento de Calidad para su Hogar",
      subtitle: "Desde servicio experto de Aire Acondicionado hasta reparaciones generales, Santair es su socio de confianza.",
      cta: "Solicitar Servicio",
    },
    form: {
      title: "Solicitud Rápida",
      location: "Ubicación",
      serviceType: "Tipo de Servicio",
      specificService: "¿Qué necesita?",
      selectLocation: "Seleccione su zona",
      selectType: "Seleccione categoría",
      selectService: "Seleccione tarea específica",
      name: "Su Nombre",
      phone: "Número de Teléfono",
      submit: "Consultar Precio",
      success: "¡Gracias! Le contactaremos pronto.",
    },
    services: {
      ac: {
        title: "Aire Acondicionado",
        desc: "Instalación, mantenimiento y reparaciones expertas para unidades de AC.",
        options: ["Instalación", "Mantenimiento", "Limpieza", "Reparación", "Recarga de Gas"]
      },
      repairs: {
        title: "Reparaciones",
        desc: "Reparaciones pequeñas y avanzadas para su propiedad.",
        options: ["Montaje de Muebles", "Pintura de Paredes", "Reparación Puertas/Ventanas", "Mantenimiento General"]
      },
      plumbing: {
        title: "Fontanería",
        desc: "Corrección de fugas, atascos y nuevas instalaciones.",
        options: ["Fugas", "Atascos", "Cambio de Grifos", "Nueva Instalación", "Calentador de Agua"]
      },
      electrical: {
        title: "Electricidad",
        desc: "Trabajos eléctricos seguros para su hogar o negocio.",
        options: ["Cortocircuitos", "Cambio de Enchufes", "Instalación de Luces", "Cuadro Eléctrico"]
      }
    },
    locations: ["Zona Norte", "Zona Sur", "Centro", "Afueras", "Polígono Industrial"],
    testimonial: {
      quote: "Trabajo de calidad y excelente actitud. Arreglaron mi AC y también me ayudaron con una fuga de agua en la misma visita. ¡Muy recomendables!",
      username: "Marcos García",
      role: "Propietario",
    }
  }
};

export type Language = "en" | "es";
export type TranslationType = typeof translations.en;
