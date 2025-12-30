
import React from 'react';
import { RPHModule } from './types';

export const RPH_CONTEXT = `
  Eres el Asistente Legal experto del Conjunto Residencial Puerto Azul Club House.
  Tu objetivo es ayudar a los copropietarios a entender y navegar el Reglamento de Propiedad Horizontal (RPH).
  
  CONTEXTO CLAVE:
  1. REGLAS: Prohibido comercio en aptos (Art 26). Fachadas inalterables (Art 58). Mora genera 1.5x interés bancario (Art 76). Pago cuota primeros 10 días (Art 70).
  2. ORGANOS: Consejo NO co-administra, NO tiene tokens bancarios, cargo personalísimo sin suplentes (Art 95). Admin debe ser Persona Jurídica o Natural tiempo completo (Art 102).
  3. ASAMBLEAS: Virtuales no pueden votar "Varios". Quórum 70% para decisiones mayores (Art 90). Derecho inspección 15 días hábiles antes (Art 87).
  4. PROHIBICIONES: Proveedores no pueden ser residentes (Conflicto interés). Bases de datos no pueden ser manejadas por propietarios (Habeas Data).
  5. ENTREGA: Constructora responsable hasta entrega a Consejo. Si consejo no va, se presume recibido (Art 129).
  
  TONO Y FORMATO:
  - Sé profesional, jurídico pero accesible, y respetuoso.
  - Cita artículos específicos siempre que sea posible.
  - Si el usuario pide redactar una carta, usa un formato formal de correspondencia (Ciudad, Fecha, Destinatario, Asunto, Cuerpo, Despedida).
  - Responde siempre en español.
`;

export const RPH_MODULES: RPHModule[] = [
  {
    id: 'admin',
    title: 'El Administrador',
    preview: 'Perfil exigido, dedicación exclusiva y pólizas obligatorias.',
    icon: '👔',
    color: 'blue',
    articles: 'Artículos 102 al 106',
    sections: [
      {
        title: 'Perfil Profesional Obligatorio',
        content: [
          'Naturaleza: Preferiblemente Persona Jurídica. Si es Persona Natural, se exige Dedicación de Tiempo Completo (Parágrafo 1).',
          'Experiencia: Mínimo 5 años certificada en copropiedades similares.',
          'Profesión: Abogado, Administrador de Empresas o Tecnólogo en PH.',
          'Equipo: Debe contar con soporte contable y jurídico.'
        ]
      },
      {
        title: 'Garantía de Cumplimiento',
        type: 'success',
        content: 'Es obligatorio constituir una póliza de seguros que garantice el manejo de los fondos de la copropiedad. El Consejo fija la cuantía (Art. 101, Numeral 1).'
      }
    ]
  },
  {
    id: 'conflictos',
    title: 'Conflictos de Interés',
    preview: 'Prohibiciones en bases de datos, contratación y Habeas Data.',
    icon: '⚖️',
    color: 'amber',
    articles: 'Transparencia y Ley de Datos',
    sections: [
      {
        title: 'Restricción de Proveedores',
        type: 'warning',
        content: 'Los proveedores de servicios (mantenimiento, obras, aseo, jurídico, etc.) o de insumos del conjunto NO pueden ser residentes ni propietarios de Puerto Azul Club House.'
      },
      {
        title: 'GRAVE: Manejo de Apps y Bases de Datos',
        type: 'danger',
        content: 'Entregar a un propietario el manejo de la página web o aplicaciones para reservas es ilegal. Viola la Ley 1581 de 2012 (Habeas Data). La base de datos es un activo de la Copropiedad, no propiedad personal de un residente.'
      }
    ]
  },
  {
    id: 'consejo',
    title: 'Consejo de Administración',
    preview: 'Prohibición de apoderados y límites a la co-administración.',
    icon: '👥',
    color: 'purple',
    articles: 'Artículos 95 al 101',
    sections: [
      {
        title: 'Prohibición de Apoderados',
        type: 'warning',
        content: 'Cargo personalísimo (Art. 95). Se encuentra expresamente prohibida la representación a través de apoderado. Si un principal no asiste, debe asumir su suplente.'
      },
      {
        title: 'No Co-administrar',
        type: 'danger',
        content: 'Está prohibido que los consejeros ejecuten tareas administrativas, den órdenes directas a empleados o proveedores, o suplanten al Administrador.'
      }
    ]
  },
  {
    id: 'asamblea',
    title: 'Asambleas y Riesgos',
    preview: 'Trampas en reuniones virtuales y el punto de "Varios".',
    icon: '🗳️',
    color: 'cyan',
    articles: 'Artículos 80 al 84',
    sections: [
      {
        title: 'Derecho Propio',
        content: 'Si no se convoca, la asamblea se reúne automáticamente el primer día hábil de abril a las 8:00 PM en los parqueaderos (Art. 82).'
      },
      {
        title: 'Trampa Virtual',
        type: 'danger',
        content: 'En reuniones virtuales, legalmente NO se pueden votar decisiones en "Proposiciones y Varios". El temario debe estar definido previamente.'
      }
    ]
  },
  {
    id: 'pagos',
    title: 'Pagos y Presupuesto',
    preview: 'Plazo de 10 días, intereses de mora y déficit.',
    icon: '💸',
    color: 'green',
    articles: 'Artículos 65, 70 y 76',
    sections: [
      {
        title: 'Plazo Estricto',
        content: 'La cuota debe pagarse anticipadamente dentro de los diez (10) primeros días calendario de cada mes (Art. 70).'
      },
      {
        title: 'Intereses de Mora',
        type: 'danger',
        content: 'El retardo genera intereses de mora a la tasa máxima legal: 1.5 veces el interés bancario corriente (Art. 76).'
      }
    ]
  },
  {
    id: 'inspeccion',
    title: 'Inspección y Control',
    preview: 'Gastos no aprobados y derechos de los propietarios.',
    icon: '🔎',
    color: 'orange',
    articles: 'Artículos 87 y Presupuesto',
    sections: [
      {
        title: 'Derecho de Inspección',
        content: 'Los libros y papeles deben estar disponibles durante los 15 días hábiles anteriores a la Asamblea.'
      },
      {
        title: 'Candado Presupuestal',
        type: 'danger',
        content: 'El Consejo NO tiene facultad para autorizar gastos que no estén en el presupuesto aprobado. Cambiar la destinación de dineros sin permiso es ilegal.'
      }
    ]
  },
  {
    id: 'entrega',
    title: 'Entrega de Zonas',
    preview: 'Responsabilidad de la constructora y transición.',
    icon: '🏗️',
    color: 'slate',
    articles: 'Artículos 129 y 130',
    sections: [
      {
        title: 'Fin de Responsabilidad',
        content: 'Una vez entregados los Bienes Comunes, cesa para la Constructora la obligación de mantenimiento (Art. 129).'
      },
      {
        title: 'Aceptación Tácita',
        type: 'warning',
        content: 'Si el Consejo no asiste a la entrega sin justa causa, se presume la aceptación tácita del buen estado de los bienes.'
      }
    ]
  },
  {
    id: 'revisor',
    title: 'Revisor Fiscal',
    preview: 'Independencia total y funciones de auditoría.',
    icon: '🕵️',
    color: 'sky',
    articles: 'Artículos 107 y 108',
    sections: [
      {
        title: 'Independencia Absoluta',
        type: 'danger',
        content: 'No puede ser propietario, pariente del administrador o tener vínculos comerciales con la copropiedad.'
      }
    ]
  },
  {
    id: 'infracciones',
    title: 'Régimen de Sanciones',
    preview: 'Multas, faltas al reglamento y prescripción.',
    icon: '🚫',
    color: 'red',
    articles: 'Artículos 116 al 124',
    sections: [
      {
        title: 'Multas',
        content: 'Máximo 2 expensas mensuales, acumulables hasta 10 veces.'
      },
      {
        title: 'Prescripción',
        type: 'warning',
        content: 'La acción para sancionar prescribe en 2 años desde el hecho. La ejecución de la multa prescribe en 1 año.'
      }
    ]
  }
];
