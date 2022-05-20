import {useState, useEffect} from "react"

// Хук возвращает актуальную ширину окна браузера (innerWidth)
export const useResize = () => {
    // initialWidth = undefined для соответствия клиента и сервера
    const [width, setWidth] = useState({
        width: undefined,
    })

    useEffect(() => {
        // Обработчик, который будет вызываться при событии
        const handleResize = () => {
            setWidth({
                width: window.innerWidth,
            })
        }

        // Вызываем обработчик, чтобы ширина обновилась с начальным размером окна
        handleResize()

        // Добавляем слушатель
        window.addEventListener("resize", handleResize)

        // Удаляем слушатель при очистке
        return () => window.removeEventListener("resize", handleResize)
    }, []) // useEffect будет вызван только при монтировании

    return width
}