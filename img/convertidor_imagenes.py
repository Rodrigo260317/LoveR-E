import os
from PIL import Image

def convertir_imagenes_a_jpeg(ruta_entrada, ruta_salida=None):
    """
    Convierte todas las imágenes encontradas en la ruta_entrada a formato JPEG
    y las guarda en la ruta_salida, renombrándolas secuencialmente como imagen_1, imagen_2, etc.

    Args:
        ruta_entrada (str): La ruta del directorio que contiene las imágenes a convertir.
        ruta_salida (str): La ruta del directorio donde se guardarán las imágenes convertidas.
                           Si no se especifica, se crea una carpeta llamada 'imagenes' en el mismo
                           directorio donde está este script.
    """
    # Si no se especifica ruta_salida, crear la carpeta 'imagenes' en el mismo directorio del script
    if ruta_salida is None:
        ruta_salida = os.path.join(os.path.dirname(__file__), "imagenes")

    # Crear el directorio de salida si no existe
    if not os.path.exists(ruta_salida):
        os.makedirs(ruta_salida)
        print(f"Directorio de salida '{ruta_salida}' creado.")

    print(f"Buscando imágenes en: {ruta_entrada}")
    print(f"Las imágenes convertidas se guardarán en: {ruta_salida}")

    # Extensiones de imagen comunes que Pillow puede abrir, incluyendo .webp y .avif
    extensiones_imagen = ('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp', '.avif')
    imagenes_procesadas = 0

    # Iterar sobre todos los archivos en el directorio de entrada
    for nombre_archivo in os.listdir(ruta_entrada):
        ruta_completa_archivo = os.path.join(ruta_entrada, nombre_archivo)

        # Verificar si es un archivo y si tiene una extensión de imagen
        if os.path.isfile(ruta_completa_archivo) and nombre_archivo.lower().endswith(extensiones_imagen):
            try:
                # Abrir la imagen
                with Image.open(ruta_completa_archivo) as img:
                    # Crear el nuevo nombre de archivo con formato imagen_X.jpeg
                    imagenes_procesadas += 1
                    nuevo_nombre = f"imagen_{imagenes_procesadas}.jpeg"
                    ruta_salida_jpeg = os.path.join(ruta_salida, nuevo_nombre)

                    # Si la imagen ya es JPEG y no tiene que ser convertida, simplemente la copiamos
                    if img.format == 'JPEG':
                        print(f"'{nombre_archivo}' ya es JPEG. Renombrando y copiando a la carpeta de salida.")
                        img.save(ruta_salida_jpeg)
                    else:
                        # Convertir y guardar la imagen en formato JPEG
                        # Usamos 'RGB' para asegurar compatibilidad con JPEG (elimina canal alfa si existe)
                        img.convert('RGB').save(ruta_salida_jpeg)
                        print(f"'{nombre_archivo}' convertido y guardado como '{nuevo_nombre}'")

            except Exception as e:
                print(f"Error al procesar '{nombre_archivo}': {e}")
        else:
            # Opcional: imprimir archivos que no son imágenes o son directorios
            # print(f"Ignorando '{nombre_archivo}' (no es un archivo de imagen soportado).")
            pass
            
    if imagenes_procesadas == 0:
        print("No se encontraron imágenes soportadas para convertir en el directorio especificado.")
    else:
        print(f"\nProceso completado. Se convirtieron y renombraron {imagenes_procesadas} imágenes.")

# --- Uso del script ---
if __name__ == "__main__":
    # Obtener el directorio donde se encuentra este script
    directorio_actual = os.path.dirname(__file__)
    convertir_imagenes_a_jpeg(directorio_actual)

    # Si quisieras especificar una carpeta diferente, podrías hacer:
    # convertir_imagenes_a_jpeg("C:/Users/TuUsuario/MisImagenes", "C:/Users/TuUsuario/ImagenesJPEG")

