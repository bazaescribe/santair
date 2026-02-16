export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "Our Story",
      contact: "Contact",
    },
    hero: {
      title: "Expert Cooling & Home Care",
      subtitle: "Your local, family-owned partner for premier Air Conditioning service and reliable property maintenance. Keeping your home comfortable since day one.",
      cta: "Book an Appointment",
    },
    tagline: {
      ac: "Premier AC Service",
      family: "Family Owned & Operated"
    },
    form: {
      title: "Get a Friendly Quote",
      location: "Your Area",
      serviceType: "Service Category",
      specificService: "How can we help you?",
      selectLocation: "Where are you located?",
      selectType: "Pick a category",
      selectService: "Choose a service",
      name: "Your Name",
      phone: "Phone Number",
      submit: "Request Free Quote",
      success: "Thank you! One of us will reach out to you personally very soon.",
    },
    services: {
      ac: {
        title: "Air Conditioning Specialists",
        desc: "Our core expertise. From high-efficiency installations to emergency repairs and seasonal maintenance, we keep you cool when it matters most.",
        options: ["New Installation", "Precision Maintenance", "Deep Cleaning", "Emergency Repair", "Gas Refill & Diagnostics"]
      },
      others: {
        title: "Additional Home Services",
        desc: "Beyond cooling, we offer expert help with the essentials your home needs to run smoothly.",
        repairs: {
          title: "Home Repairs",
          options: ["Furniture Assembly", "Interior Painting", "General Fixes"]
        },
        plumbing: {
          title: "Plumbing",
          options: ["Leak Detection", "Faucet & Shower", "Water Heaters"]
        },
        electrical: {
          title: "Electrical",
          options: ["Outlets & Switches", "Lighting", "Panel Safety"]
        }
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
    locations: ["Downtown Orlando", "Winter Park", "Lake Nona", "Kissimmee", "Winter Garden", "Windermere", "Altamonte Springs", "Celebration"],
    testimonial: {
      quote: "Santair feels like having a brother in the business. They fixed my AC in no time and even tightened a loose cabinet door just to be helpful. Truly local expertise.",
      username: "Marc Johnson",
      role: "Homeowner",
    }
  },
  es: {
    nav: {
      services: "Servicios",
      about: "Nuestra Historia",
      contact: "Contacto",
    },
    hero: {
      title: "Expertos en Climatización y Cuidado del Hogar",
      subtitle: "Su socio local y familiar para servicios de Aire Acondicionado de primer nivel y mantenimiento confiable. Manteniendo su hogar cómodo desde el primer día.",
      cta: "Solicitar Cita",
    },
    tagline: {
      ac: "Especialistas en AC",
      family: "Negocio Familiar"
    },
    form: {
      title: "Solicite un Presupuesto",
      location: "Su Zona",
      serviceType: "Categoría de Servicio",
      specificService: "¿En qué podemos ayudarle?",
      selectLocation: "Seleccione su ubicación",
      selectType: "Elija una categoría",
      selectService: "Elija un servicio",
      name: "Su Nombre",
      phone: "Número de Teléfono",
      submit: "Consultar Precio Gratis",
      success: "¡Gracias! Le contactaremos personalmente muy pronto.",
    },
    services: {
      ac: {
        title: "Especialistas en Aire Acondicionado",
        desc: "Nuestra especialidad principal. Desde instalaciones de alta eficiencia hasta reparaciones de emergencia y mantenimiento estacional.",
        options: ["Nueva Instalación", "Mantenimiento de Precisión", "Limpieza Profunda", "Reparación de Emergencia", "Recarga de Gas y Diagnóstico"]
      },
      others: {
        title: "Servicios Adicionales",
        desc: "Más allá de la climatización, ofrecemos ayuda experta con los servicios esenciales que su hogar necesita.",
        repairs: {
          title: "Reparaciones",
          options: ["Montaje de Muebles", "Pintura Interior", "Arreglos Generales"]
        },
        plumbing: {
          title: "Fontanería",
          options: ["Detección de Fugas", "Grifería y Duchas", "Calentadores"]
        },
        electrical: {
          title: "Electricidad",
          options: ["Enchufes e Interruptores", "Iluminación", "Cuadros Eléctricos"]
        }
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
    locations: ["Downtown Orlando", "Winter Park", "Lake Nona", "Kissimmee", "Winter Garden", "Windermere", "Altamonte Springs", "Celebration"],
    testimonial: {
      quote: "Santair es como tener a un hermano en el negocio. Arreglaron mi AC enseguida y hasta apretaron una puerta suelta del armario solo por ayudar. Auténtica confianza local.",
      username: "Marcos García",
      role: "Propietario",
    }
  }
};

export type Language = "en" | "es";
export type TranslationType = typeof translations.en;
