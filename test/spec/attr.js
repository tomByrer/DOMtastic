describe('attr', function() {

    describe('set', function() {

        it('should set attribute on element', function() {
            $(document.body).attr('myAttribute', 'myValue');
            var expected = 'myValue',
                actual = document.body.getAttribute('myAttribute');
            expect(actual).to.equal(expected);
        });

        it('should set attribute on elements', function() {
            $('#testFragment li').attr('myAttribute', 'myValue');
            var expected = 'myValue',
                actual = $('.two')[0].getAttribute('myAttribute');
            expect(actual).to.equal(expected);
        });

        it('should set multiple attributes on elements', function() {
            $('#testFragment li').attr({myAttribute: 'myValue', foo: 'bar'});
            var expected = 'bar',
                actual = $('.two')[0].getAttribute('foo');
            expect(actual).to.equal(expected);
        });

        it('should not throw when trying to set attribute in empty collection', function() {
            var element = $('#not-there'),
                fn = element.attr.bind(element);
            expect(fn).not.to.throw(TypeError);
        });

    });

    describe('get', function() {

        it('should get attribute from first element', function() {
            $('#testFragment .two').attr('firstAttr', 'firstValue');
            var actual = $('#testFragment [class]').attr('firstAttr'),
                expected = 'firstValue';
            expect(actual).to.equal(expected);
        });

        it('should not throw when trying to get attribute in empty collection', function() {
            var element = $('#not-there'),
                fn = element.attr.bind(element),
                actual = element.attr('foo');
            expect(fn).not.to.throw(TypeError);
            expect(actual).to.be.undefined;
        });

    });

    it('should provide a chainable API', function() {
        var element = $('#testEmpty').attr('foo', 'bar').attr('foo', 'baz'),
            expected = 'baz',
            actual = element[0].getAttribute('foo');
        expect(actual).to.equal(expected);
    });

});
