
        function diferenciasDivididas(x, y, xp) {
            let n = x.length;
            let divDiff = Array.from({length: n}, () => Array(n).fill(0));

            for (let i = 0; i < n; i++) {
                divDiff[i][0] = y[i];
            }

            for (let j = 1; j < n; j++) {
                for (let i = 0; i < n - j; i++) {
                    divDiff[i][j] = (divDiff[i + 1][j - 1] - divDiff[i][j - 1]) / (x[i + j] - x[i]);
                }
            }

            let result = divDiff[0][0];
            for (let i = 1; i < n; i++) {
                let term = divDiff[0][i];
                for (let j = 0; j < i; j++) {
                    term *= (xp - x[j]);
                }
                result += term;
            }
            return result;
        }

        function calcularDiferenciasDivididas() {
            const xValues = document.getElementById('xValues').value.split(',').map(Number);
            const yValues = document.getElementById('yValues').value.split(',').map(Number);
            const xpValue = parseFloat(document.getElementById('xpValue').value);

            if (xValues.length !== yValues.length) {
                alert('Los valores de X y Y deben tener la misma cantidad de elementos.');
                return;
            }

            const result = diferenciasDivididas(xValues, yValues, xpValue);
            document.getElementById('resultado').innerText = result;
        }

        function resetFields() {
            document.getElementById('xValues').value = '';
            document.getElementById('yValues').value = '';
            document.getElementById('xpValue').value = '';
            document.getElementById('resultado').innerText = '';
        }
