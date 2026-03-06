
import React from 'react';
import { RPHModule } from './types';

export const RPH_CONTEXT = `
  Eres el Asistente Legal experto del Conjunto Residencial Puerto Azul Club House.
  Tu objetivo es ayudar a los copropietarios a entender y navegar el Reglamento de Propiedad Horizontal (RPH) y la Ley 675 de 2001.
  
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
        title: 'Perfil y Naturaleza del Cargo',
        content: [
          'Designación: Es nombrado por el Consejo de Administración para periodos de un año, removible en cualquier momento.',
          'Naturaleza: Representante legal de la copropiedad y ejecutor del presupuesto.',
          'Dedicación: El Parágrafo 1 del Art. 102 exige dedicación de tiempo completo para garantizar la operatividad de un conjunto de la complejidad de Puerto Azul.',
          'Requisito Profesional: Debe acreditar formación en administración, derecho o áreas afines con mínimo 5 años de experiencia.'
        ]
      },
      {
        title: 'Funciones de Ejecución (Art. 104)',
        content: [
          'Cobro de expensas: Es el único facultado para iniciar procesos ejecutivos de cobro.',
          'Conservación: Velar por el mantenimiento preventivo y correctivo de los bienes comunes.',
          'Personal: Contratar, supervisar y despedir al personal de vigilancia, aseo y mantenimiento (en coordinación con las empresas prestadoras).'
        ]
      },
      {
        title: 'Garantías y Seguros',
        type: 'success',
        content: 'El Administrador tiene la obligación legal de constituir una póliza de cumplimiento y manejo de fondos. El Consejo de Administración debe verificar la vigencia de esta póliza trimestralmente.'
      }
    ]
  },
  {
    id: 'conflictos',
    title: 'Transparencia y Datos',
    preview: 'Prohibiciones en bases de datos, contratación y Habeas Data.',
    icon: '⚖️',
    color: 'amber',
    articles: 'Ley 1581 de 2012 y RPH',
    sections: [
      {
        title: 'Conflicto de Intereses en Contratación',
        type: 'warning',
        content: [
          'Prohibición Absoluta: Ningún propietario, residente o pariente hasta cuarto grado de consanguinidad de los miembros del Consejo o Administración puede ser proveedor del conjunto.',
          'Objetivo: Evitar el favorecimiento personal y garantizar que la copropiedad obtenga los mejores precios y calidad de mercado.'
        ]
      },
      {
        title: 'Riesgo Crítico: Habeas Data',
        type: 'danger',
        content: 'El manejo de bases de datos de residentes (incluyendo correos, teléfonos y registros de apps de citofonía) por parte de propietarios es una falta gravísima. La Ley 1581 de 2012 sanciona drásticamente el acceso no autorizado a datos sensibles. La Administración es la ÚNICA responsable del tratamiento de datos.'
      },
      {
        title: 'Uso de Tecnología',
        content: 'Cualquier software o aplicación utilizada para la gestión de Puerto Azul debe ser propiedad de la copropiedad o contratada con un tercero profesional, nunca administrada desde cuentas personales de residentes.'
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
        title: 'Integración y Carácter Personalísimo',
        type: 'warning',
        content: 'El cargo de consejero es personal e indelegable (Art. 95). Un consejero no puede enviar a un apoderado a las reuniones del consejo para que vote en su nombre. Si no puede asistir, debe ser reemplazado por el suplente elegido en asamblea.'
      },
      {
        title: 'Funciones de Control (No ejecución)',
        content: [
          'Límites: El Consejo supervisa, no ejecuta. No puede dar órdenes directas al jardinero, guarda de seguridad o todero.',
          'Presupuesto: Deben verificar que el administrador no se extralimite en los rubros aprobados por la asamblea.',
          'Tokens Bancarios: Se recomienda que el Consejo tenga acceso de "consulta" a las cuentas, pero NUNCA el manejo del token de pagos, el cual es responsabilidad exclusiva del Administrador y Contador.'
        ]
      },
      {
        title: 'Incompatibilidades',
        type: 'danger',
        content: 'Un consejero en mora con sus cuotas de administración pierde automáticamente su calidad de miembro y no puede participar en las deliberaciones hasta que se ponga al día.'
      }
    ]
  },
  {
    id: 'asamblea',
    title: 'Asambleas y Decisiones',
    preview: 'Trampas en reuniones virtuales y el punto de "Varios".',
    icon: '🗳️',
    color: 'cyan',
    articles: 'Artículos 80 al 94',
    sections: [
      {
        title: 'Asamblea Ordinaria',
        content: 'Debe realizarse dentro de los tres primeros meses del año (Art. 81). Si el administrador no convoca, los copropietarios tienen el derecho de reunirse por derecho propio el primer día hábil de abril.'
      },
      {
        title: 'Quórum Especial (70%)',
        type: 'warning',
        content: 'Para decisiones de gran impacto como: reformas al RPH, desafectación de bienes comunes, reconstrucción del conjunto o imposición de expensas extraordinarias superiores a 4 veces la cuota mensual, se requiere un voto favorable del 70% del coeficiente total.'
      },
      {
        title: 'La "Trampa" de Proposiciones y Varios',
        type: 'danger',
        content: 'En las reuniones no presenciales (virtuales), la ley es clara: solo se pueden decidir los temas expresamente incluidos en la convocatoria. Cualquier votación realizada en el punto de "Varios" de una asamblea virtual es NULA de pleno derecho.'
      }
    ]
  },
  {
    id: 'pagos',
    title: 'Finanzas y Recaudo',
    preview: 'Plazo de 10 días, intereses de mora y cuotas extra.',
    icon: '💸',
    color: 'green',
    articles: 'Artículos 65 al 79',
    sections: [
      {
        title: 'Obligación de Pago (Art. 70)',
        content: 'Las cuotas de administración deben cancelarse dentro de los diez (10) primeros días calendario de cada mes. Superado este plazo, el copropietario entra en estado de mora automáticamente.'
      },
      {
        title: 'Intereses Moratorios',
        type: 'danger',
        content: 'La ley y el reglamento facultan el cobro de la tasa máxima legal (1.5 veces el interés bancario corriente). La Administración NO puede condonar intereses sin previa autorización de la Asamblea General.'
      },
      {
        title: 'Cobro Pre-jurídico y Jurídico',
        content: 'Después de 90 días de mora, la cuenta debe pasar a cobro profesional. Los honorarios del abogado corren por cuenta exclusiva del copropietario deudor.'
      }
    ]
  },
  {
    id: 'inspeccion',
    title: 'Inspección y Auditoría',
    preview: 'Acceso a libros, facturas y contratos del conjunto.',
    icon: '🔎',
    color: 'orange',
    articles: 'Artículos 87 y 109',
    sections: [
      {
        title: 'Alcance del Derecho de Inspección',
        content: [
          '¿Qué se puede revisar?: Libros de contabilidad, comprobantes de egreso, facturas de proveedores, contratos laborales y actas de consejo.',
          'Plazo: Este derecho se ejerce habitualmente durante los 15 días hábiles previos a la asamblea ordinaria.',
          'Límite: El copropietario puede inspeccionar pero no retirar los documentos de la oficina de administración ni entorpecer la labor diaria.'
        ]
      },
      {
        title: 'Gastos No Presupuestados',
        type: 'danger',
        content: 'Cualquier gasto superior a 2 salarios mínimos que no esté contemplado en el presupuesto anual aprobado debe ser consultado al Consejo, y si es una mejora no necesaria, debe ir a Asamblea Extraordinaria.'
      }
    ]
  },
  {
    id: 'entrega',
    title: 'Post-Venta y Garantías',
    preview: 'Responsabilidad de la constructora y bienes comunes.',
    icon: '🏗️',
    color: 'slate',
    articles: 'Artículos 129 y 130',
    sections: [
      {
        title: 'Entrega de Bienes Comunes (Art. 129)',
        content: 'La Constructora entrega los bienes comunes esenciales al momento de la entrega de la primera unidad. Los bienes no esenciales (piscina, club house, gimnasio) se entregan cuando se haya enajenado el 51% de los coeficientes.'
      },
      {
        title: 'Garantías Legales',
        type: 'warning',
        content: [
          'Acabados: 1 año de garantía.',
          'Estructura: 10 años de garantía (Estatuto del Consumidor).',
          'Importante: La falta de mantenimiento preventivo por parte del conjunto puede invalidar las garantías de la constructora.'
        ]
      },
      {
        title: 'Vicios Ocultos',
        content: 'Si tras la entrega aparecen fallas que no eran visibles inicialmente, el Consejo tiene la obligación de radicar la reclamación formal de inmediato para no perder la oportunidad legal.'
      }
    ]
  },
  {
    id: 'revisor',
    title: 'Revisoría Fiscal',
    preview: 'Independencia total y funciones de auditoría.',
    icon: '🕵️',
    color: 'sky',
    articles: 'Artículos 107 y 108',
    sections: [
      {
        title: 'Rol del Revisor Fiscal',
        content: 'Es el representante de los copropietarios para vigilar que la administración y el consejo cumplan la ley y el reglamento. Dictamina los estados financieros.'
      },
      {
        title: 'Prohibición de Vínculos',
        type: 'danger',
        content: 'No puede tener ningún grado de parentesco con el administrador, miembros del consejo, contador o contratistas del conjunto. Su independencia es la única garantía de transparencia.'
      }
    ]
  },
  {
    id: 'infracciones',
    title: 'Debido Proceso',
    preview: 'Multas, faltas al reglamento y defensa.',
    icon: '🚫',
    color: 'red',
    articles: 'Artículos 116 al 124',
    sections: [
      {
        title: 'Escala de Sanciones',
        content: [
          '1. Llamado de atención privado.',
          '2. Llamado de atención público (en cartelera o asamblea).',
          '3. Imposición de multas pecuniarias.',
          '4. Restricción de uso de bienes comunes no esenciales (piscina, bbq).'
        ]
      },
      {
        title: 'El Debido Proceso (Obligatorio)',
        type: 'warning',
        content: 'Antes de imponer una multa, el afectado tiene derecho a: 1. Ser notificado del cargo. 2. Presentar descargos y pruebas. 3. Ser escuchado por el Comité de Convivencia o Consejo. 4. Recibir una resolución motivada.'
      },
      {
        title: 'Límite de Multas',
        type: 'danger',
        content: 'Ninguna multa individual puede superar el valor de dos (2) cuotas de administración mensuales. La suma de multas en un año no puede superar diez (10) cuotas.'
      }
    ]
  }
];
